import { useRouter } from "next/navigation";
import FilterBtnSvg from "@/components/SVG/BannerSvg/FilterBtnSvg";
import { propertyStates } from "@/data/dropdownData";
import NiceSelect from "@/components/UI/NiceSelect";
import { ITabContentProps } from "@/types/banner-d-t";

// TabContent Component
export default function HeroBannerTabContent({
  id,
  isActive,
  onSortChange,
  toggleFilter,
}: ITabContentProps) {
  const router = useRouter();
  const getProperties = () => {
    router.push("/property-style-1");
  };
  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      id={id}
      role="tabpanel"
    >
      <div className="tp-hero-tab-box d-flex align-items-center">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-xs-12 col-xl-3 col-lg-3">
            <div className="tp-hero-tab-select tp-select">
              <NiceSelect
                options={propertyStates}
                defaultCurrent={0}
                onChange={onSortChange}
                name="Sorting"
              />
            </div>
          </div>
          <div className="col-xs-12 col-xl-6 col-lg-6">
            <div className="tp-hero-tab-input p-relative">
              <input
                type="text"
                placeholder="Search by name"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-xs-6 col-xl-1 col-lg-1">
            <div className="tp-hero-tab-filter">
              <button
                className="tp-hero-filter-btn filter-btn"
                onClick={toggleFilter}
              >
                <span>
                  <FilterBtnSvg />
                </span>
              </button>
            </div>
          </div>
          <div className="col-xs-6 col-xl-2 col-lg-2">
            <div className="tp-hero-tab-search">
              <button onClick={() => getProperties()}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
