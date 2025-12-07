import PropertyDetailsOneArea from "@/components/RealEstate/PropertyDetailsOne/Details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malaysia Property Search – Verified Listings Only",
};

export default async function PropertyDetails() {
  return (
    <Wrapper>
      <main>
        {/* property details area start */}
        <PropertyDetailsOneArea id={1} />
        {/* property details area end */}
      </main>
    </Wrapper>
  );
}
