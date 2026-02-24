import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-20 pb-20 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-emerald">
        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <p className="text-zinc-400">Last updated: February 24, 2026</p>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
          <p className="text-zinc-400">
            By accessing and using ShortsSafe, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-white">2. Use License</h2>
          <p className="text-zinc-400">
            Permission is granted to temporarily use the tools on ShortsSafe's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="text-zinc-400 list-disc pl-6 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on ShortsSafe's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white">3. Disclaimer</h2>
          <p className="text-zinc-400">
            The materials on ShortsSafe's website are provided on an 'as is' basis. ShortsSafe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-white">4. Limitations</h2>
          <p className="text-zinc-400">
            In no event shall ShortsSafe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ShortsSafe's website.
          </p>

          <h2 className="text-2xl font-bold text-white">5. Accuracy of Materials</h2>
          <p className="text-zinc-400">
            The materials appearing on ShortsSafe's website could include technical, typographical, or photographic errors. ShortsSafe does not warrant that any of the materials on its website are accurate, complete or current. ShortsSafe may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-2xl font-bold text-white">6. Governing Law</h2>
          <p className="text-zinc-400">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>
      </div>
    </div>
  );
}
