import propertyBg from "../../../public/assets/img/rent/property-bg.jpg";
import AddPropertyMain from "./components/AddPropertyMain";
import VerticalProgress from "./components/VerticalProgress";
import { Metadata } from "next";
import BackToTop from "@/components/Common/BackToTop";
import FooterStyleTwo from "@/layouts/Footers/FooterStyleTwo";
import CommonHeader from "@/layouts/Headers/CommonHeader";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Add New Property - Property-La Real Estate React NextJs Template",
};

export default function AddProperty() {
  return (
    <>
      <Wrapper>
        <CommonHeader />
        <section
          className="tp-property-ptb pt-35 pb-120"
          style={{ backgroundImage: `url(${propertyBg.src})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <VerticalProgress currentStep={3} />
              </div>
              <div className="col-lg-9">
                <AddPropertyMain />
              </div>
            </div>
          </div>
        </section>
        <FooterStyleTwo />
        <BackToTop />
      </Wrapper>
    </>
  );
}
