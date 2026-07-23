import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Your Cart — Swaraj Enterprises" }, { name: "description", content: "Review the products in your cart." }] }),
});

function CartPage() {
  const setOpen = useCart((s) => s.setOpen);
  useEffect(() => { setOpen(true); }, [setOpen]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-32">
      <div className="text-center">
        <div className="label-eyebrow">Your Cart</div>
        <h1 className="mt-4 font-display text-4xl">Slide out to review</h1>
      </div>
    </div>
  );
}
