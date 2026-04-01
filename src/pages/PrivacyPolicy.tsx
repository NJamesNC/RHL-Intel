import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
      <div
        className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: PRIVACY_HTML }}
      />
    </main>
    <Footer />
  </div>
);

const PRIVACY_HTML = `
<h1>Privacy Policy</h1>
<p>Paste your privacy policy HTML here.</p>
`;

export default PrivacyPolicy;
