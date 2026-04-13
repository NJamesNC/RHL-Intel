import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl text-gray-800" style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", lineHeight: "1.6" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "4px" }}>TERMS OF SERVICE</h1>
        <p style={{ color: "#595959", marginBottom: "24px" }}><strong>Last updated: April 4, 2026</strong></p>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>AGREEMENT TO OUR LEGAL TERMS</h2>
        <p style={{ color: "#595959" }}>These Terms of Service constitute a legally binding agreement between you and Reflect His Light LLC (doing business as Dynamic Details SATX), concerning your access to and use of dynamicdetailssatx.com.</p>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>SERVICES</h2>
        <p style={{ color: "#595959" }}>Dynamic Details SATX provides mobile auto detailing services in San Antonio, TX. We come to you and provide professional car washing and detailing services. By submitting your information through our website, you are requesting a service quote.</p>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>PAYMENTS</h2>
        <p style={{ color: "#595959" }}>We accept payments through Stripe. All payment information is handled securely by Stripe. You agree to provide current, complete, and accurate purchase information.</p>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>REFUND POLICY</h2>
        <ul style={{ color: "#595959", paddingLeft: "20px", listStyleType: "disc" }}>
          <li style={{ marginBottom: "6px" }}>Cancellations 24+ hours before scheduled service: Full refund</li>
          <li style={{ marginBottom: "6px" }}>Cancellations less than 24 hours before: 50% refund or free reschedule</li>
          <li style={{ marginBottom: "6px" }}>Customer no-show: No refund</li>
          <li style={{ marginBottom: "6px" }}>Service dissatisfaction: Contact <a href="mailto:james@rhldigital.com" style={{ color: "#3030F1" }}>james@rhldigital.com</a> within 24 hours for re-service or partial refund consideration</li>
          <li style={{ marginBottom: "6px" }}>Dynamic Details SATX no-show: Full refund within 3–5 business days</li>
        </ul>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>PROHIBITED ACTIVITIES</h2>
        <p style={{ color: "#595959" }}>You may not use our services for any unlawful purpose or in violation of any regulations.</p>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>DISPUTE RESOLUTION</h2>
        <p style={{ color: "#595959" }}>Please contact us first at <a href="mailto:james@rhldigital.com" style={{ color: "#3030F1" }}>james@rhldigital.com</a> to resolve any disputes informally. If unresolved within 30 days, disputes will proceed to arbitration in Texas under United States law.</p>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>LIMITATION OF LIABILITY</h2>
        <p style={{ color: "#595959" }}>Our liability is limited to the amount you paid for the specific service in dispute.</p>

        <h2 style={{ fontSize: "19px", fontWeight: "bold", marginTop: "24px", marginBottom: "8px" }}>CONTACT US</h2>
        <p style={{ color: "#595959" }}>
          Reflect His Light LLC (DBA Dynamic Details SATX)<br />
          3424 Meteor Night, Converse, TX 78109<br />
          Email: <a href="mailto:james@rhldigital.com" style={{ color: "#3030F1" }}>james@rhldigital.com</a><br />
          Phone: <a href="tel:2107624966" style={{ color: "#3030F1" }}>(210) 762-4966</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
