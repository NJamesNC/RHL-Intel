import { MapPin, Leaf, ThumbsUp, Clock, Shield } from "lucide-react";

const points = [
  { icon: MapPin, title: "We Come to YOU", desc: "Anywhere in San Antonio — home, office, wherever." },
  { icon: Leaf, title: "Eco-Friendly Products", desc: "Safe for your car, your family, and the planet." },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "Not happy? We re-detail for free. Period." },
  { icon: Clock, title: "Same-Day Available", desc: "Same-day & next-day slots open right now." },
  { icon: Shield, title: "Military Discount", desc: "Discounts for military & first responders." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 px-4 border-t border-border">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-cream tracking-wider mb-12">
        WHY CHOOSE US
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {points.map((p) => (
          <div key={p.title} className="text-center space-y-3">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <p.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-cream tracking-wider">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
