"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CustomStripeForm from "./components/checkout-form";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const createPaymentIntent = async (amount: number) => {
  try {
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
      signal: AbortSignal.timeout(15000), // 15 second timeout
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Payment initialization failed");
    }

    return response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out, please try again");
    }
    throw error;
  }
};

export default function Payments() {
  return (
    <Elements stripe={stripePromise}>
      <CustomStripeForm />
    </Elements>
  );
}
