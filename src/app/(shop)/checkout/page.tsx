import BreadcrumbArea from "@/components/Breadcrumb/BreadcrumbArea";
import CheckoutArea from "@/components/shop/CheckoutArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malaysia Real Estate: New Projects, Prices & Upcoming Developments",
};

export default function Checkout() {
  return (
    <main>
      {/* -- Breadcrumb start -- */}
      <BreadcrumbArea title="Checkout" />
      {/* -- Breadcrumb end -- */}

      {/* -- Checkout area start -- */}
      <CheckoutArea />
      {/* -- Checkout area end -- */}
    </main>
  );
}
