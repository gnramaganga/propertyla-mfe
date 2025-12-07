import BreadcrumbArea from "@/components/Breadcrumb/BreadcrumbArea";
import TeamAgencyArea from "@/components/Agency/TeamAgencyArea";
import CtaArea from "@/components/CTA/CtaArea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Malaysian Properties Faster Than iProperty & PropertyGuru",
};

export default function Agency() {
  return (
    <>
      {/* breadcrumb area */}
      <BreadcrumbArea title="Agency" />
      {/* breadcrumb area end */}

      {/* team area */}
      <TeamAgencyArea />
      {/* team area end */}

      {/* cta area */}
      <CtaArea wrapClass="tp-cta-4-ptb" />
      {/* cta area end */}
    </>
  );
}
