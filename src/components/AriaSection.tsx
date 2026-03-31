import { useState } from "react";
import { Bot, PhoneCall, CalendarCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const WEBHOOK_URL = import.meta.env.VITE_ARIA_WEBHOOK_URL || "";

const AriaSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, source: "Aria Demo Request", timestamp: new Date().toISOString() }),
        });
      }
      setSubmitted(true);
      toast.success("Demo request received! We'll be in touch soon.");
    } catch (err) {
      console.error("Webhook error:", err);
      setSubmitted(true);
      toast.success("Demo request received! We'll be in touch soon.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
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

        {submitted ? (
          <div className="rounded-xl border border-primary/40 bg-card p-8 space-y-3"
            style={{ background: "var(--gradient-card)" }}>
            <p className="font-display text-2xl text-cream tracking-wider">YOU'RE ON THE LIST!</p>
            <p className="text-muted-foreground">
              We'll reach out within 24 hours to schedule your free Aria demo.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-8 space-y-4 text-left"
            style={{ background: "var(--gradient-card)" }}
          >
            <p className="font-display text-cream tracking-wider text-lg text-center mb-2">
              BOOK YOUR FREE DEMO
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Phone *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="(210) 555-0000"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button
              type="submit"
              variant="aria"
              size="xl"
              className="w-full"
              disabled={submitting}
            >
              {submitting ? (
                <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Sending...</>
              ) : (
                "Book FREE Aria Demo"
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AriaSection;
