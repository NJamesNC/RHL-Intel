import { Button } from "@/components/ui/button";
import { Bot, PhoneCall, CalendarCheck } from "lucide-react";

const AriaSection = () => (
  <section id="aria" className="py-20 px-4 border-t border-border">
    <div className="container mx-auto max-w-3xl text-center space-y-8">
      <div className="mx-auto h-20 w-20 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
        <Bot className="h-10 w-10 text-cream" />
      </div>

      <h2 className="font-display text-3xl md:text-5xl font-bold text-cream tracking-wider">
        MEET ARIA — YOUR AI RECEPTIONIST
      </h2>

      <p className="text-muted-foreground text-lg max-w-xl mx-auto">
        Never miss a lead again. Aria answers calls 24/7, books appointments, and follows up — 
        so you can focus on detailing cars, not chasing customers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: PhoneCall, label: "24/7 Call Answering" },
          { icon: CalendarCheck, label: "Auto Booking" },
          { icon: Bot, label: "Smart Follow-Up" },
        ].map((f) => (
          <div key={f.label} className="text-center space-y-2">
            <f.icon className="h-8 w-8 mx-auto text-primary" />
            <p className="font-display text-cream tracking-wider text-sm">{f.label}</p>
          </div>
        ))}
      </div>

      <Button variant="aria" size="xl">
        Book FREE Aria Demo
      </Button>
    </div>
  </section>
);

export default AriaSection;
