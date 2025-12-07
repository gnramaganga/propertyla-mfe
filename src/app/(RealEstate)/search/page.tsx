import PropertyLayout from "@/components/Layout/PropertyLayout";
import PropertyOneArea from "@/components/RealEstate/PropertyStyleOne/PropertyOneArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malaysia Property Market Forecast 2025 – What Buyers Should Know",
};

export default function PropertyOne() {
  return (
    <>
      {/* property area start */}
      <PropertyLayout>
        <PropertyOneArea />
      </PropertyLayout>
      {/* property area end */}
    </>
  );
}
