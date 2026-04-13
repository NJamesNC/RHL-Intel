import { Button } from "@/components/ui/button";
import { Car, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const packages = [
  {
    id: "full-detail-regular",
    icon: Car,
    name: "Regular Cars",
    price: "$120",
    description: "Sedans, coupes, and standard-size vehicles.",
    features: ["Full interior detail", "Full exterior hand wash", "Wheels & tires", "Windows inside & out", "Leather conditioning"],
  },
  {
    id: "full-detail-suv",
    icon: Car,
    name: "SUVs",
    price: "$140",
    description: "Mid-size and full-size SUVs.",
    features: ["Full interior detail", "Full exterior hand wash", "Wheels & tires", "Windows inside & out", "Leather conditioning"],
    popular: true,
  },
  {
    id: "full-detail-large",
    icon: Car,
    name: "Large Trucks / Large SUVs",
    price: "$160",
    description: "Full-size trucks, Suburbans, Expeditions & more.",
    features: ["Full interior detail", "Full exterior hand wash", "Wheels & tires", "Windows inside & out", "Leather conditioning"],
  },
];

const addons = [
  { name: "Step 1 Paint Correction", price: "$200" },
  { name: "Ceramic Wax Upgrade", price: "$300" },
  { name: "Steam Cleaning", price: "$50" },
  { name: "Engine Bay Detail", price: "$50" },
  { name: "Pet Hair Removal", price: "$50–$100" },
  { name: "Carpet Extraction", price: "$50" },
  { name: "Seat Extraction", price: "$20 / seat" },
  { name: "Sticker Removal", price: "$5 / sticker" },
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

        {/* Full Detail Packages */}
        <h3 className="font-display text-xl md:text-2xl font-bold text-cream tracking-wider text-center mb-6 uppercase">
          Full Detail Packages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-xl p-6 flex flex-col border transition-transform hover:-translate-y-1 ${
                pkg.popular
                  ? "border-primary bg-card shadow-[var(--shadow-glow)]"
                  : "border-border bg-card shadow-[var(--shadow-card)]"
              }`}
              style={{ background: "var(--gradient-card)" }}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display tracking-widest uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <pkg.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-cream tracking-wider mb-1">
                {pkg.name}
              </h3>
              <p className="font-display text-3xl font-bold text-primary mb-2">{pkg.price}</p>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{pkg.description}</p>
              <ul className="space-y-2 mb-6 text-sm">
                {pkg.features.map((f) => (
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
                disabled={loadingId === pkg.id}
                onClick={() => handleBook(pkg.id)}
              >
                {loadingId === pkg.id ? (
                  <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Processing...</>
                ) : (
                  "Book This Package"
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <h3 className="font-display text-xl md:text-2xl font-bold text-cream tracking-wider text-center mb-6 uppercase">
          Add-on Services
        </h3>
        <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden mb-12"
          style={{ background: "var(--gradient-card)" }}>
          {addons.map((addon, i) => (
            <div
              key={addon.name}
              className={`flex items-center justify-between px-6 py-4 ${
                i < addons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-primary shrink-0" />
                <span className="text-cream font-medium">{addon.name}</span>
              </div>
              <span className="font-display text-primary font-bold text-lg">{addon.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button variant="aria" size="xl" asChild>
            <a href="#aria">Book FREE Aria Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
