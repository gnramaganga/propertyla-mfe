import ResetSvgIcon from "../SVG/BannerSvg/ResetSvgIcon";
import SaveSvgIcon from "../SVG/BannerSvg/SaveSvgIcon";
import SearchSvg from "../SVG/BannerSvg/SearchSvg";
import NiceSelect from "../UI/NiceSelect";
import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { useForm } from "react-hook-form";

const BannerFromFilter = () => {
  // Define state for both sliders
  const [priceRange, setPriceRange] = useState<[number, number]>([75, 300]);
  const [sizeRange, setSizeRange] = useState<[number, number]>([50, 800]);
  const [propertyType, setPropertyType] = useState<string>("All");
  const [propertyTypeKey, setPropertyTypeKey] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    //resolver: yupResolver(signInSchema),
  });

  const handlePriceChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      if (values.length === 2) {
        setPriceRange([values[0], values[1]]);
      }
    } else {
      setPriceRange([values, values]);
    }
  };

  const handleSizeChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      if (values.length === 2) {
        setSizeRange([values[0], values[1]]);
      }
    } else {
      setSizeRange([values, values]);
    }
  };

  const handleSorting = () => {};
  const resetForm = () => {
    setPropertyType("All");
    setPropertyTypeKey((prev) => prev + 1);
  };

  const onSubmit = async (data: FormData) => {
    alert(propertyType);
  };
  const onPropertyChange = (e: any) => {
    setPropertyType(e.value);
  };

  return (
    <>
      <div className="tp-from-wrapper" style={{ borderRadius: "8px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tp-from-select-box d-flex flex-wrap flex-lg-nowrap">
            <div className="tp-hero-tab-select tp-select">
              <NiceSelect
                key={propertyTypeKey}
                options={[
                  { value: "All", label: "All Residential" },
                  { value: "Apartment", label: "Apartment" },
                  { value: "Condominium", label: "Condominium" },
                  { value: "Landed House", label: "Landed House" },
                  { value: "Bungalow", label: "Bungalow" },
                  { value: "Shop", label: "Shop" },
                  { value: "Office", label: "Office" },
                ]}
                value={propertyType}
                defaultCurrent={0}
                onChange={onPropertyChange}
                name="propertyType"
              />
            </div>
            <div className="tp-hero-tab-select tp-select">
              <NiceSelect
                options={[
                  { value: "All", label: "Bed rooms" },
                  { value: "Studio", label: "Studio" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                defaultCurrent={0}
                onChange={() => handleSorting()}
                name="Sorting"
              />
            </div>
            <div className="tp-hero-tab-select tp-select">
              <NiceSelect
                options={[
                  { value: "All", label: "Show Properties" },
                  { value: "Auction", label: "Auction" },
                  { value: "Commercial", label: "Commercial" },
                  { value: "New Launch", label: "New Launch" },
                  { value: "Plot", label: "Plot" },
                  { value: "Residence", label: "Residence" },
                  { value: "Subsale", label: "Subsale" },
                ]}
                defaultCurrent={0}
                onChange={() => handleSorting()}
                name="Sorting"
              />
            </div>
          </div>
          <div className="tp-from-input-box d-flex flex-wrap flex-lg-nowrap">
            <div className="tp-hero-tab-select tp-select">
              <NiceSelect
                options={[
                  { value: "All", label: "Furnishing" },
                  { value: "Full Furnishing", label: "Full Furnishing" },
                  { value: "Semi Furnishing", label: "Semi Furnishing" },
                  { value: "Un Furnishing", label: "Un Furnishing" },
                ]}
                defaultCurrent={0}
                onChange={() => handleSorting()}
                name="Sorting"
              />
            </div>
            <div className="tp-from-input">
              <input type="text" placeholder="Min. price" />
            </div>
            <div className="tp-from-input">
              <input type="text" placeholder="Max. price" />
            </div>
          </div>
          <div className="tp-from-bottom d-flex justify-content-between flex-wrap">
            <div className="tp-hero-tab-search">
              {/* <button>
                <span>
                  <SearchSvg />
                </span>{" "}
                Search Property
              </button> */}
            </div>
            <div className="tp-from-button-box d-flex">
              <div className="tp-from-button">
                <button type="submit">
                  <SaveSvgIcon /> Save
                </button>
              </div>
              <div className="tp-from-button">
                <button type="button" onClick={() => resetForm()}>
                  <ResetSvgIcon /> Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerFromFilter;
