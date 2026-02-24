import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-20 pb-20 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-emerald">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <p className="text-zinc-400">Last updated: February 24, 2026</p>
        
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
          <p className="text-zinc-400">
            Welcome to ShortsSafe. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>

          <h2 className="text-2xl font-bold text-white">2. Data Collection (Browser-Based Processing)</h2>
          <p className="text-zinc-400">
            Our core tool, the YouTube Shorts Safe Zone Previewer, operates entirely within your web browser. When you upload an image for previewing, that image is processed locally on your device. <strong>We do not upload, store, or transmit your images to our servers.</strong>
          </p>

          <h2 className="text-2xl font-bold text-white">3. Cookies and Google AdSense</h2>
          <p className="text-zinc-400">
            We use Google AdSense to serve advertisements on our site. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
          </p>
          <ul className="text-zinc-400 list-disc pl-6 space-y-2">
            <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-emerald-400">Ads Settings</a>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white">4. Log Data</h2>
          <p className="text-zinc-400">
            Like most website operators, we collect information that your browser sends whenever you visit our website. This may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, and other statistics.
          </p>

          <h2 className="text-2xl font-bold text-white">5. Third-Party Links</h2>
          <p className="text-zinc-400">
            Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>

          <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
          <p className="text-zinc-400">
            If you have any questions about this Privacy Policy, please contact us at support@shortssafe.com.
          </p>
        </section>
      </div>
    </div>
  );
}
