import express from "express";
import cors from "cors";
import Stripe from "stripe";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

process.on('uncaughtException', (err) => {
  console.error('CRASH:', err);
  process.exit(1);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20",
});

const app = express();
app.use(cors());
app.use(express.json());

const PRICES = {
  "basic-mobile-wash": { amount: 5900, name: "Basic Mobile Wash" },
  "interior-refresh": { amount: 9900, name: "Interior Refresh" },
  "full-dynamic-detail": { amount: 17900, name: "Full Dynamic Detail" },
  "premium-ceramic-shield": { amount: 24900, name: "Premium Ceramic Shield" },
};

app.post("/api/create-checkout", async (req, res) => {
  const { serviceId } = req.body;
  const priceInfo = PRICES[serviceId];

  if (!priceInfo) {
    return res.status(400).json({ error: "Unknown service" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: "Stripe not configured" });
  }

  const origin = process.env.VITE_BASE_URL ||
    `${req.protocol}://${req.get("host")}`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: priceInfo.name },
            unit_amount: priceInfo.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#services`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});

const distPath = path.join(__dirname, "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(process.env.PORT || 3000, "0.0.0.0");
