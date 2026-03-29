import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Marcus T.",
    text: "Dynamic Details came to my office parking lot and had my truck looking brand new in under an hour. Best mobile detailing in SA!",
    stars: 5,
  },
  {
    name: "Jessica R.",
    text: "I got the Ceramic Shield package and my car still looks showroom-fresh 3 months later. Worth every penny.",
    stars: 5,
  },
  {
    name: "David L.",
    text: "Booked same-day and they showed up on time. Interior was spotless. Already booked my next appointment!",
    stars: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 border-t border-border">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-cream tracking-wider mb-12">
        WHAT CUSTOMERS SAY
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="rounded-xl p-6 border border-border"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: r.stars }).map((_, s) => (
                <Star key={s} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 italic">"{r.text}"</p>
            <p className="font-display text-cream tracking-wider font-bold">{r.name}</p>
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

export default Testimonials;
