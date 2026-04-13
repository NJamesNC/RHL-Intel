import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Dynamic Details logo" className="h-12 w-12 rounded-full" />
          <span className="font-display text-lg tracking-wider text-cream hidden sm:block">
            DYNAMIC DETAILS
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-wider text-muted-foreground hover:text-cream transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <Button variant="book" size="sm">
            Book Now
          </Button>
          <Button variant="aria" size="sm">
            Book Aria Demo
          </Button>
          <a
            href="tel:2107624966"
            className="flex items-center gap-1 text-cream font-display text-sm tracking-wider"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">(210) 762-4966</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-display text-sm tracking-wider text-muted-foreground hover:text-cream uppercase py-2"
            >
              {link.label}
            </a>
          ))}
          <Button variant="book" size="lg" className="w-full">
            Book Now
          </Button>
          <Button variant="aria" size="lg" className="w-full">
            Book Aria Demo
          </Button>
          <a
            href="tel:2107624966"
            className="flex items-center justify-center gap-2 text-cream font-display tracking-wider py-2"
          >
            <Phone className="h-4 w-4" />
            (210) 762-4966
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
