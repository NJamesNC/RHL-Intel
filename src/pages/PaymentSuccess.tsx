import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="font-display text-3xl font-bold text-cream tracking-wider mb-4">
          BOOKING CONFIRMED!
        </h1>
        <p className="text-muted-foreground mb-8">
          Thank you for choosing Dynamic Details! We'll reach out shortly to confirm your appointment time.
        </p>
        <Button variant="book" size="lg" asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
