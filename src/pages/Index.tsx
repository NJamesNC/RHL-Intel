import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AriaSection from "@/components/AriaSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dynamic Details",
  description: "San Antonio's premier mobile car detailing service. We come to your home or office.",
  url: "https://dynamicdetailssa.com",
  telephone: "+12105279081",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "San Antonio",
  },
  priceRange: "$59-$249",
  image: "https://dynamicdetailssa.com/logo.png",
  sameAs: ["https://instagram.com/dynamic.detailzz"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Detailing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Basic Mobile Wash", description: "Exterior wash, wheels, tires" },
        price: "59",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Interior Refresh", description: "Vacuum, wipe down, windows" },
        price: "99",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Full Dynamic Detail", description: "Full interior + exterior detail" },
        price: "179",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Premium Ceramic Shield", description: "Paint protection + deep shine" },
        price: "249",
        priceCurrency: "USD",
      },
    ],
  },
};

const Index = () => (
  <>
    <Helmet>
      <title>Dynamic Details | Mobile Car Detailing San Antonio TX</title>
      <meta
        name="description"
        content="San Antonio's #1 mobile detailing service. We come to your home or office. Exterior wash, interior detail, ceramic coating. Same-day availability. Call (210) 527-9081."
      />
      <meta name="keywords" content="mobile detailing San Antonio, mobile car wash San Antonio, car detailing San Antonio TX, ceramic coating San Antonio" />
      <link rel="canonical" href="https://dynamicdetailssa.com" />
      <meta property="og:title" content="Dynamic Details | Mobile Car Detailing San Antonio TX" />
      <meta property="og:description" content="San Antonio's fastest mobile car wash & full detail. We come to you. Book now!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dynamicdetailssa.com" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />
    <Hero />
    <Services />
    <WhyChooseUs />
    <Gallery />
    <Testimonials />
    <AriaSection />
    <Footer />
  </>
);

export default Index;
