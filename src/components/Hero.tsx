import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.7 }} />
      </div>

      <div className="relative container mx-auto px-4 py-20 text-center space-y-8">
        <img
          src={logo}
          alt="Dynamic Details San Antonio"
          className="h-32 w-32 md:h-44 md:w-44 mx-auto rounded-full shadow-2xl animate-fade-in-up"
        />

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-cream animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          MOBILE DETAILING THAT COMES TO YOU
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          San Antonio's fastest car wash & full detail — we come to your home or office.
          Same-day slots open now.{" "}
          <a href="tel:2107624966" className="text-cream font-semibold hover:underline">
            Call (210) 762-4966
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Button variant="book" size="xl" asChild>
            <a href="#services">BOOK NOW</a>
          </Button>
          <Button variant="aria" size="xl" asChild>
            <a href="#aria">Book FREE Aria Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
