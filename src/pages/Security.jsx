import React from 'react'
import { Lock } from 'lucide-react'

export default function Security() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6">
                    <Lock size={12} /> Security
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Security</h1>
                <p className="text-slate-500 text-lg">Your data protection is our top priority.</p>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Data Encryption</h3>
                <p>
                    We use industry-standard encryption protocols (TLS 1.2+) to protect data in transit between your devices and our servers. Data at rest is encrypted using AES-256 encryption standards.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Access Controls</h3>
                <p>
                    Access to customer data is strictly limited to authorized personnel who require access to perform their job duties. We employ multi-factor authentication (MFA) and role-based access control (RBAC) to ensure only the right people have access to sensitive information.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Infrastructure Security</h3>
                <p>
                    Our infrastructure is hosted on top-tier cloud providers that maintain high standards of physical and network security (e.g., SOC 2, ISO 27001). We perform regular vulnerability scans and penetration testing to identify and address potential security risks.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Compliance</h3>
                <p>
                    We are committed to complying with applicable data privacy regulations, including GDPR and CCPA. We provide tools and features to help our customers maintain compliance with these regulations.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Incident Response</h3>
                <p>
                    We have a comprehensive incident response plan in place to handle any security incidents or breaches. In the event of a breach, we will notify affected customers in accordance with applicable laws and regulations.
                </p>
            </div>
        </div>
    )
}
