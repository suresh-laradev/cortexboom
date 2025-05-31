import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AddressElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#1F2937", // Tailwind gray-800
      "::placeholder": {
        color: "#9CA3AF", // gray-400
      },
    },
    invalid: {
      color: "#EF4444", // red-500
    },
  },
};

const CustomStripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(500); // in cents
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!stripe || !elements) return;

    // setLoading(true);

    // try {
    //   const { clientSecret } = await createPaymentIntent(amount);
    //   if (!clientSecret) {
    //     throw new Error("Failed to initialize payment");
    //   }

    //   const cardNumberElement = elements.getElement(CardNumberElement);
    //   if (!cardNumberElement) {
    //     throw new Error("Card information is incomplete");
    //   }

    //   const result = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: cardNumberElement,
    //     },
    //   });

    //   if (result.error) {
    //     throw new Error(result.error.message);
    //   }

    //   if (result.paymentIntent?.status === "succeeded") {
    //     alert("Payment successful!");
    //   }
    // } catch (error) {
    //   alert(error.message || "An unknown error occurred");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 mt-10">
      <div>
        <Label htmlFor="amount">Amount (cents)</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <div className="space-y-4 p-4 border rounded-lg">
        <div>
          <Label>Card Number</Label>
          <div className="border rounded-md p-2">
            <CardNumberElement options={ELEMENT_OPTIONS} />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <Label>Expiry</Label>
            <div className="border rounded-md p-2">
              <CardExpiryElement options={ELEMENT_OPTIONS} />
            </div>
          </div>
          <div className="flex-1">
            <Label>CVC</Label>
            <div className="border rounded-md p-2">
              <CardCvcElement options={ELEMENT_OPTIONS} />
            </div>
          </div>
        </div>
        <div className="w-full mt-2 text-sm text-gray-500">
          <Label>Address</Label>
          <div className="border rounded-md p-2">
            <AddressElement options={{ mode: "shipping" }} />
          </div>
        </div>
      </div>

      <Button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </Button>
    </form>
  );
};

export default CustomStripeForm;
