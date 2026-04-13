import { Phone, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Dynamic Details" className="h-10 w-10 rounded-full" />
          <span className="font-display text-cream tracking-wider font-bold">DYNAMIC DETAILS</span>
        </div>
        <p className="text-muted-foreground text-sm">
          San Antonio's premier mobile detailing service. We come to you.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-display text-cream tracking-wider font-bold">CONTACT</h4>
        <a href="tel:2107624966" className="flex items-center gap-2 text-muted-foreground hover:text-cream text-sm">
          <Phone className="h-4 w-4" /> (210) 762-4966
        </a>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="h-4 w-4" /> San Antonio, TX
        </div>
        <a
          href="https://instagram.com/dynamic.detailzz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-cream text-sm"
        >
          <Instagram className="h-4 w-4" /> @dynamic.detailzz
        </a>
      </div>

      <div className="space-y-3">
        <h4 className="font-display text-cream tracking-wider font-bold">SERVICES</h4>
        <ul className="space-y-1 text-muted-foreground text-sm">
          <li>Basic Mobile Wash</li>
          <li>Interior Refresh</li>
          <li>Full Dynamic Detail</li>
          <li>Premium Ceramic Shield</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto mt-8 pt-6 border-t border-border text-center text-muted-foreground text-xs space-y-2">
      <div>© {new Date().getFullYear()} Dynamic Details — San Antonio, TX. Built by RHL Digital.</div>
      <div className="flex items-center justify-center gap-4">
        <Link to="/privacy" className="hover:text-cream underline underline-offset-2">
          Privacy Policy
        </Link>
        <span>·</span>
        <Link to="/terms" className="hover:text-cream underline underline-offset-2">
          Terms of Service
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
