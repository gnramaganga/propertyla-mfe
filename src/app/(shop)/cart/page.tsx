import BreadcrumbArea from "@/components/Breadcrumb/BreadcrumbArea";
import CartArea from "@/components/shop/CartArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kuala Lumpur Property Market 2025: Best Areas to Invest",
};

export default function Cart() {
  return (
    <main>
      {/* -- Breadcrumb start -- */}
      <BreadcrumbArea title="Cart" />
      {/* -- Breadcrumb end -- */}

      {/* -- Cart area start -- */}
      <CartArea />
      {/* -- Cart area end -- */}
    </main>
  );
}
