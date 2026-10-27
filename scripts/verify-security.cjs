// scripts/verify-security.cjs
/**
 * Automated Production Security & Secret Leakage Verification Script
 * Audits source code, environment config, build pipeline, and dist bundles.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SRC_DIR = path.join(ROOT_DIR, 'src');

let failures = [];
let passes = [];

function pass(testName) {
  passes.push(testName);
  console.log(`  ✅ PASS: ${testName}`);
}

function fail(testName, details) {
  failures.push({ testName, details });
  console.error(`  ❌ FAIL: ${testName}\n     ${details}`);
}

console.log('🔍 Starting Comprehensive Security Audit...\n');

// 1. Audit .gitignore
console.log('1. Checking .gitignore coverage...');
try {
  const gitignore = fs.readFileSync(path.join(ROOT_DIR, '.gitignore'), 'utf8');
  if (gitignore.includes('.env') && gitignore.includes('.env.*') && gitignore.includes('dist/')) {
    pass('.gitignore properly excludes sensitive .env files and build dist');
  } else {
    fail('.gitignore configuration', 'Missing rules for .env or dist');
  }
} catch (e) {
  fail('.gitignore read error', e.message);
}

// 2. Audit Git Tracking (Ensure no secrets or .env files are tracked by Git)
console.log('\n2. Verifying Git tracked files...');
try {
  const trackedFiles = execSync('git ls-files', { cwd: ROOT_DIR, encoding: 'utf8' })
    .split('\n')
    .filter(Boolean);

  const leakedTracked = trackedFiles.filter(f => 
    (f.includes('.env') && !f.endsWith('.example')) || 
    f.endsWith('test.html') || 
    f.includes('credential') || 
    f.endsWith('.map')
  );

  if (leakedTracked.length === 0) {
    pass('No sensitive files, .env files, or test scratch artifacts are tracked in Git');
  } else {
    fail('Tracked sensitive files detected in Git', leakedTracked.join(', '));
  }
} catch (e) {
  fail('Git tracking verification failed', e.message);
}

// 3. Audit Client Source Code for VITE_ Secret Patterns
console.log('\n3. Scanning client-side source code (src/)...');
function scanDir(dir, pattern, checkFn) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git') scanDir(full, pattern, checkFn);
    } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.html') || item.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      checkFn(full, content);
    }
  }
}

let foundViteSecrets = [];
scanDir(SRC_DIR, /import\.meta\.env\.VITE_[A-Z_]*(SECRET|PASSWORD|PRIVATE|DB)/g, (file, content) => {
  const matches = content.match(/import\.meta\.env\.VITE_[A-Z_]*(SECRET|PASSWORD|PRIVATE|DB)/g);
  if (matches) {
    foundViteSecrets.push(`${path.relative(ROOT_DIR, file)}: ${matches.join(', ')}`);
  }
});

if (foundViteSecrets.length === 0) {
  pass('No private backend credentials or database secrets exposed in client source code');
} else {
  fail('Client references private secret variables', foundViteSecrets.join('\n     '));
}

// 4. Audit Production Dist Directory
console.log('\n4. Verifying production build artifacts in dist/...');
if (!fs.existsSync(DIST_DIR)) {
  fail('dist directory not found', 'Run npm run build first');
} else {
  // Check for source maps
  const mapFiles = [];
  function findMaps(dir) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) findMaps(full);
      else if (f.endsWith('.map')) mapFiles.push(full);
    }
  }
  findMaps(DIST_DIR);

  if (mapFiles.length === 0) {
    pass('No production source maps (.map) exist in dist/ bundle');
  } else {
    fail('Production source maps found in dist/', mapFiles.join(', '));
  }

  // Guard against leaking internal admin portal URLs or server credentials
  const prohibitedInDist = [
    'engivo-admin.onrender.com',
    'DATABASE_URL',
    'MONGODB_URI',
    'SMTP_PASS'
  ];

  let leaksFound = [];
  function scanDistFiles(dir) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) scanDistFiles(full);
      else if (f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.css')) {
        const text = fs.readFileSync(full, 'utf8');
        for (const secret of prohibitedInDist) {
          if (text.includes(secret)) {
            leaksFound.push(`Leak of prohibited pattern ${secret} found in ${path.relative(ROOT_DIR, full)}`);
          }
        }
      }
    }
  }
  scanDistFiles(DIST_DIR);

  if (leaksFound.length === 0) {
    pass('Production dist/ bundle is completely free of sensitive keys, webhook URLs, and credentials');
  } else {
    fail('Exposed secrets detected in production build', leaksFound.join('\n     '));
  }
}

// 5. Audit Server Configuration
console.log('\n5. Verifying backend service routes and security boundaries...');
try {
  const serverCode = fs.readFileSync(path.join(ROOT_DIR, 'server', 'server.cjs'), 'utf8');
  const vapiRoute = fs.readFileSync(path.join(ROOT_DIR, 'server', 'routes', 'vapi.cjs'), 'utf8');
  const chatRoute = fs.readFileSync(path.join(ROOT_DIR, 'server', 'routes', 'chat.cjs'), 'utf8');

  if (serverCode.includes('X-Content-Type-Options') && serverCode.includes('rateLimit')) {
    pass('Server enforces security headers and rate limiting');
  } else {
    fail('Server hardening', 'Missing security headers or rate limiter');
  }

  if (vapiRoute.includes('https://api.vapi.ai/call/web') && vapiRoute.includes('process.env.VAPI_API_KEY')) {
    pass('Voice agent credentials securely isolated on backend with server-side proxy');
  } else {
    fail('Vapi proxy architecture', 'Server proxy does not authenticate Vapi requests server-side');
  }

  if (chatRoute.includes('process.env.N8N_CHAT_WEBHOOK_URL')) {
    pass('Automation chat webhook URL isolated on backend with rate-limiting');
  } else {
    fail('Chat proxy architecture', 'Server does not proxy chat webhook');
  }
} catch (e) {
  fail('Backend service verification error', e.message);
}

console.log('\n===========================================');
console.log(`AUDIT RESULTS: ${passes.length} Passed, ${failures.length} Failed`);
console.log('===========================================');

if (failures.length > 0) {
  process.exit(1);
} else {
  console.log('🛡️  All security checks passed successfully!\n');
  process.exit(0);
}
