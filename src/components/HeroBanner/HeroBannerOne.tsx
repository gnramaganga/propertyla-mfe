"use client";
import heroBg from "../../../public/assets/img/hero/hero-bg-1.jpg";
import HeroBannerTabContent from "./subComponents/HeroBannerTab";
import BannerFromFilter from "../Form/BannerFromFilter";
import { SocialLinks } from "../UI/SocialLinks";
import React, { useState } from "react";

export default function HeroBannerOne() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [activeTab] = useState("nav-rent");
  const toggleFilter = () => setIsFilterVisible((prev) => !prev);
  const handleSorting = () => {};

  return (
    <>
      {/* -- hero area start -- */}
      <section
        className="tp-hero-ptb tp-hero-hight pt-325 p-relative"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-hero-content">
                <div className="tp-hero-heading text-center">
                  <h3
                    className="tp-hero-heading-title wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Discover Your Place
                  </h3>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    Anywhere in Malaysia
                  </p>
                </div>
                <div
                  className="tp-hero-tab p-relative wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".7s"
                >
                  <div className="row">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link"
                          id="nav-buy-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-buy"
                          type="button"
                          role="tab"
                          aria-controls="nav-buy"
                          aria-selected="true"
                        >
                          Buy
                        </button>
                        <button
                          className="nav-link active"
                          id="nav-rent-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-rent"
                          type="button"
                          role="tab"
                          aria-controls="nav-rent"
                          aria-selected="false"
                        >
                          Rent
                        </button>
                        <button
                          className="nav-link"
                          id="nav-new-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-new"
                          type="button"
                          role="tab"
                          aria-controls="nav-new"
                          aria-selected="false"
                        >
                          New Launch
                        </button>
                        <button
                          className="nav-link"
                          id="nav-commercial-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-commercial"
                          type="button"
                          role="tab"
                          aria-controls="nav-commercial"
                          aria-selected="false"
                        >
                          Commercial
                        </button>
                        <button
                          className="nav-link"
                          id="nav-land-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-land"
                          type="button"
                          role="tab"
                          aria-controls="nav-land"
                          aria-selected="false"
                        >
                          Plots/Land
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <HeroBannerTabContent
                        id="nav-buy"
                        isActive={activeTab === "nav-buy"}
                        onSortChange={handleSorting}
                        toggleFilter={toggleFilter}
                      />
                      <HeroBannerTabContent
                        id="nav-rent"
                        isActive={activeTab === "nav-rent"}
                        onSortChange={handleSorting}
                        toggleFilter={toggleFilter}
                      />
                      <HeroBannerTabContent
                        id="nav-new"
                        isActive={activeTab === "nav-new"}
                        onSortChange={handleSorting}
                        toggleFilter={toggleFilter}
                      />
                      <HeroBannerTabContent
                        id="nav-commercial"
                        isActive={activeTab === "nav-commercial"}
                        onSortChange={handleSorting}
                        toggleFilter={toggleFilter}
                      />
                      <HeroBannerTabContent
                        id="nav-land"
                        isActive={activeTab === "nav-land"}
                        onSortChange={handleSorting}
                        toggleFilter={toggleFilter}
                      />
                    </div>
                  </div>
                  {/* -- form area start -- */}
                  <section
                    className={`tp-from-filter ${
                      isFilterVisible ? "show" : "hidden"
                    }`}
                  >
                    <BannerFromFilter />
                  </section>
                  {/* -- form area end -- */}
                </div>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -- hero area end -- */}
    </>
  );
}
