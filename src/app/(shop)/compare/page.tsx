import BreadcrumbArea from "@/components/Breadcrumb/BreadcrumbArea";
import CompareArea from "@/components/shop/CompareArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Suburbs to Live in KL – Family-Friendly & Expat Areas",
};

export default function Compare() {
  return (
    <main>
      {/* -- Breadcrumb start -- */}
      <BreadcrumbArea title="Compare" />
      {/* -- Breadcrumb end -- */}

      {/* -- Compare Area start -- */}
      <CompareArea />
      {/* -- Compare Area end -- */}
    </main>
  );
}
