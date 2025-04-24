"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutPage } from "@/app/(root)/checkout/check-out";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import CheckoutLoading from "./CheckoutLoading";

const StripePage = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
  const searchParams = useSearchParams();

  const amountParam = searchParams.get("amount");
  const amount = amountParam ? parseFloat(amountParam) : 0;

  const router = useRouter();
  if (!stripePromise || !amount) return <CheckoutLoading />;

  return (
    <main className="max-w-6xl mx-auto p-10 bg-white text-center border m-10 rounded-md  relative">
      <Button
        onClick={() => router.back()}
        variant={"outline"}
        className="left-10 top-10 absolute "
      >
        العودة
        <ArrowLeft size={24} />
      </Button>
      <div className="mb-10 flex flex-col items-start">
        <h2 className="text-2xl">
          المبلغ المستحق:
          <span className="font-bold">
            {new Intl.NumberFormat("ar-SA", {
              style: "currency",
              currency: "SAR",
            }).format(amount)}
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          يرجى إتمام الدفع خلال هذه الصفحة لتأكيد حجزك. بعد الدفع، سيتم إرسال
          تأكيد الحجز إلى بريدك الإلكتروني.
        </p>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: Math.round(amount * 100),
          currency: "sar",
        }}
      >
        <CheckoutPage amount={amount} onPaymentSuccess={() => {}} />
      </Elements>
    </main>
  );
};

export default StripePage;
