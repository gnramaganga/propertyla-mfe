import TeamAgencyDetailsMain from "@/components/Agency/Details/TeamAgencyDetailsMain";
import BreadcrumbArea from "@/components/Breadcrumb/BreadcrumbArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houses for Sale in Malaysia – Best Deals You Won’t Find on iProperty",
};

export default async function AgencyDeails() {
  return (
    <main>
      <>
        {/* breadcrumb area start */}
        <BreadcrumbArea title="Agency Details" />
        {/* breadcrumb area end */}

        {/* agency details area start */}
        <TeamAgencyDetailsMain id={1} />
        {/* agency details area end */}
      </>
    </main>
  );
}
