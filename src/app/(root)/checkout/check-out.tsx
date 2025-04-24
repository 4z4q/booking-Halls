"use client";
import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface CheckoutPageProps {
  amount: number;
  onPaymentSuccess: (success: boolean) => void;
}

export const CheckoutPage = ({
  amount,
  onPaymentSuccess,
}: CheckoutPageProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // Convert to cents and create payment intent
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: Math.round(amount * 100) }),
        });

        if (!response.ok) {
          throw new Error("Failed to create payment intent");
        }

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Failed to initialize payment. Please try again.");
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setErrorMessage("Payment system is not ready. Please try again.");
      return;
    }

    setLoading(true);
    setErrorMessage(undefined);

    try {
      // Step 1: Submit payment details to Stripe
      const { error: submitError } = await elements.submit();
      if (submitError) {
        throw submitError;
      }

      // Step 2: Confirm the payment
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/payment-success?amount=${amount}`,
          receipt_email: localStorage.getItem("email") || undefined,
        },
        redirect: "if_required",
      });

      if (error) {
        throw error;
      }

      // If no immediate error, show success
      onPaymentSuccess(true);
      toast.success("Payment processed successfully!");
      router.push(`/payment-success?amount=${amount}`);
    } catch (error) {
      console.log("Payment Error:", error);
      setErrorMessage(error.message || "An unexpected error occurred");
      router.push(`${window.location.origin}/checkout/payment-failure`);
    } finally {
      setLoading(false);
    }
  };

  if (!clientSecret) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mb-4"></div>
        <p>Preparing secure payment...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />

      {errorMessage && (
        <div className="text-red-500 text-sm p-2 rounded bg-red-50">
          {errorMessage}
        </div>
      )}

      <button
        disabled={!stripe || loading}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          ` ${new Intl.NumberFormat("ar-SA", {
            currency: "SAR",
            style: "currency",
          }).format(amount)} `
        )}
      </button>
    </form>
  );
};
