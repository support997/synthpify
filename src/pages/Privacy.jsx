import React from 'react'
import { Shield } from 'lucide-react'

export default function Privacy() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6">
                    <Shield size={12} /> Legal
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
                <p className="text-slate-500 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h3>
                <p>
                    Welcome to Synthpify AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy applies to our website and services and governs our data collection, processing, and usage practices.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h3>
                <p>
                    We collect information that you provide directly to us, such as when you create an account, update your profile, use the interactive features of our services, or communicate with us. This information may include your name, email address, phone number, and other contact or identifying information you choose to provide.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h3>
                <p>
                    We use the information we collect to provide, maintain, and improve our services, including to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Process transactions and send related information, including confirmations and invoices.</li>
                    <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                    <li>Respond to your comments, questions, and requests and provide customer service.</li>
                    <li>Communicate with you about products, services, offers, promotions, rewards, and events offered by us and others, and provide news and information we think will be of interest to you.</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h3>
                <p>
                    We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at support@synthpify.
                </p>
            </div>
        </div>
    )
}
