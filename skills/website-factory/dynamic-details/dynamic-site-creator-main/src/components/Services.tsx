import { Button } from "@/components/ui/button";
import { Car, Armchair, Sparkles, Shield, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  {
    icon: Car,
    id: "basic-mobile-wash",
    name: "Basic Mobile Wash",
    price: "$59",
    description: "Exterior wash, wheels, tires — we come to you.",
    features: ["Full exterior hand wash", "Wheel & tire cleaning", "Rinse & dry"],
  },
  {
    icon: Armchair,
    id: "interior-refresh",
    name: "Interior Refresh",
    price: "$99",
    description: "Vacuum, wipe down, windows — fresh & clean.",
    features: ["Full vacuum", "Dashboard & console wipe", "Window cleaning"],
  },
  {
    icon: Sparkles,
    id: "full-dynamic-detail",
    name: "Full Dynamic Detail",
    price: "$179",
    description: "Complete interior + exterior — the works.",
    features: ["Everything in Basic Wash", "Full interior detail", "Leather conditioning"],
    popular: true,
  },
  {
    icon: Shield,
    id: "premium-ceramic-shield",
    name: "Premium Ceramic Shield",
    price: "$249",
    description: "Paint protection + deep shine — long-lasting.",
    features: ["Full Dynamic Detail included", "Ceramic coating application", "6-month protection"],
  },
];

const Services = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleBook = async (serviceId: string) => {
    setLoadingId(serviceId);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast.error("Could not start checkout. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-cream tracking-wider mb-4">
          OUR SERVICES
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Professional mobile detailing delivered to your door in San Antonio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-xl p-6 flex flex-col border transition-transform hover:-translate-y-1 ${
                service.popular
                  ? "border-primary bg-card shadow-[var(--shadow-glow)]"
                  : "border-border bg-card shadow-[var(--shadow-card)]"
              }`}
              style={{ background: "var(--gradient-card)" }}
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display tracking-widest uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <service.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-cream tracking-wider mb-1">
                {service.name}
              </h3>
              <p className="font-display text-3xl font-bold text-primary mb-2">{service.price}</p>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{service.description}</p>
              <ul className="space-y-2 mb-6 text-sm">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant="book"
                size="lg"
                className="w-full"
                disabled={loadingId === service.id}
                onClick={() => handleBook(service.id)}
              >
                {loadingId === service.id ? (
                  <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Processing...</>
                ) : (
                  "Book This Service"
                )}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="aria" size="xl" asChild>
            <a href="#aria">Book FREE Aria Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
