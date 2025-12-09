"use client";
import React, { useState } from "react";
import {
  ActiveWishListSvg,
  BathroomsSvg,
  BedroomsSvg,
  CartSvg,
  LivingSvg,
  WishListSvg,
} from "@/components/SVG";
import { CompireSvgTwo } from "@/components/SVG/PropertySvg/CompireSvg";
import DetailsReusableArea from "./subComponents/DetailsReusableArea";
import PropertyDetailsSlider from "./subComponents/PropertySlider";
import BookmarkSvg from "@/components/SVG/PropertySvg/BookmarkSvg";
import { toggle_wishlist } from "@/redux/slices/wishlistSlice";
import { compire_product } from "@/redux/slices/compireSlice";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import { cart_product } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { propertyData } from "@/data/propertyData";
import { IdProps } from "@/types/custom-interface";
import { RootState } from "@/redux/store";
import Image from "next/image";
import ApartmentIcon1 from "../../../../public/assets/img/rent/property/property-details-thumb-1.png";
import propertyBg from "../../../../public/assets/img/rent/property-bg.jpg";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";

export default function PropertyDetailsOneArea({ id }: IdProps) {
  const dispatch = useDispatch();
  // Find the property that matches the given ID
  const property = propertyData.find((property) => property.id == id);

  //handle add to compire
  const handleAddToCompire = (product: IFeaturedPropertyDT) => {
    if (product) {
      dispatch(compire_product(product));
    }
  };
  //handle add to cart
  const handleAddToCart = (product: IFeaturedPropertyDT) => {
    if (product) {
      dispatch(cart_product(product));
    }
  };
  //handle wishlist
  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishlistProducts
  );
  const isWishlisted = wishlist?.some((wishlistItem) => wishlistItem.id === id);

  const dummyImages = [
    "https://picsum.photos/id/1018/1000/600",
    "https://picsum.photos/id/1024/1000/600",
    "https://picsum.photos/id/1037/1000/600",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % dummyImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? dummyImages.length - 1 : prev - 1));
  };

  return (
    <>
      <section
        className="tp-property-ptb pt-35 pb-50"
        style={{ backgroundImage: `url(${propertyBg.src})` }}
      >
        {/* <section className="tp-property-details-area pt-80 pb-130"> */}
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Search", href: "/search" },
              { label: "Property Details" },
            ]}
          />
          <div className="row">
            <div className="col-lg-6">
              <div className="image-wrapper">
                <Image
                  src={ApartmentIcon1}
                  style={{
                    height: "auto",
                    marginTop: "13px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  alt={"image"}
                  onClick={() => openModal()}
                />
                <span className="count-badge">{5}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-property-details-heading mb-70">
                <h4 className="tp-property-details-title">{property?.title}</h4>
                <span>{property?.address}</span>
                <div className="tp-property-details-info">
                  <span>
                    <BedroomsSvg /> {property?.bedrooms} Bed
                  </span>
                  <span>
                    <BathroomsSvg /> {property?.bathrooms} Baths
                  </span>
                  <span>
                    <LivingSvg /> {property?.livingArea}
                  </span>
                </div>
              </div>
              <h4 className="tp-property-details-icon-price">
                ${property?.price}
              </h4>
            </div>
          </div>
        </div>
      </section>
      <DetailsReusableArea />
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close Button */}
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            {/* Slider Buttons */}
            <button className="nav-btn left" onClick={prevImage}>
              ❮
            </button>

            <img
              src={dummyImages[currentIndex]}
              alt="full"
              className="modal-image"
            />

            <button className="nav-btn right" onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .thumbnail-container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .thumbnail {
          width: 120px;
          height: 80px;
          object-fit: cover;
          cursor: pointer;
          border-radius: 8px;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal-content {
          position: relative;
          width: 90%;
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-image {
          max-width: 95%;
          max-height: 95%;
          border-radius: 10px;
          object-fit: contain;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 40px;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          font-size: 40px;
          color: white;
          cursor: pointer;
          padding: 5px 15px;
          border-radius: 6px;
        }

        .nav-btn.left {
          left: 20px;
        }

        .nav-btn.right {
          right: 20px;
        }
        .image-wrapper {
          position: relative;
           {
            /* display: inline-block; */
          }
        }

        .main-image {
          border-radius: 8px;
        }

        .count-badge {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
