import React from 'react'
import { FileText } from 'lucide-react'

export default function Terms() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6">
                    <FileText size={12} /> Legal
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Terms of Service</h1>
                <p className="text-slate-500 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h3>
                <p>
                    By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h3>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Synthpify AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>Attempt to decompile or reverse engineer any software contained on Synthpify AI's website;</li>
                    <li>Remove any copyright or other proprietary notations from the materials; or</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Disclaimer</h3>
                <p>
                    The materials on Synthpify AI's website are provided on an 'as is' basis. Synthpify AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Limitations</h3>
                <p>
                    In no event shall Synthpify AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Synthpify AI's website, even if Synthpify AI or a Synthpify AI authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
            </div>
        </div>
    )
}
