"use client";
import React, { useState } from "react";
import {
  ActiveWishListSvg,
  BathroomsSvg,
  BedroomsSvg,
  CartSvg,
  CompireSvg,
  LivingSvg,
  WishListSvg,
} from "../SVG";
import { toggle_wishlist } from "@/redux/slices/wishlistSlice";
import { compire_product } from "@/redux/slices/compireSlice";
import { IFeatureListProps } from "@/types/custom-interface";
import { IFeaturedPropertyDT } from "@/types/property-d-t";
import { useDispatch, useSelector } from "react-redux";
import { cart_product } from "@/redux/slices/cartSlice";
import { formatPrice } from "../Utils/formatPrice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

export default function PropertySingleCard({ item }: IFeatureListProps) {
  const dispatch = useDispatch();

  //handle add to cart
  const handleAddToCart = (product: IFeaturedPropertyDT) => {
    if (product) {
      dispatch(cart_product(product));
    }
  };
  //handle add to compire
  const handleAddToCompire = (product: IFeaturedPropertyDT) => {
    if (product) {
      dispatch(compire_product(product));
    }
  };
  //handle wishlist
  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishlistProducts
  );
  const isWishlisted = wishlist?.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

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
    <div
      style={{ border: "1px solid #DBE1EF", borderRadius: "8px" }}
      className={`row tp-rent-item p-relative ${item.spacing && "mb-30"} ${
        item.wowAnimation && "wow fadeInUp"
      }`}
      data-wow-duration={item.wowDelay ? "1s" : undefined}
      data-wow-delay={item.wowDelay ? item.wowDelay : undefined}
    >
      <div className="col-xl-6 tp-rent-thumb p-relative">
        <div className="thumbnail-container">
          <Image
            src={item.image}
            style={{
              width: "100%",
              height: "auto",
              marginTop: "13px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            alt={item.title}
            onClick={() => openModal()}
          />
        </div>
        <div className="tp-rent-user-wrap d-flex align-items-center justify-content-between">
          <div className="tp-rent-user d-flex align-items-center">
            <div className="tp-rent-user-thumb">
              {item.userImage && <Image src={item.userImage} alt="User" />}
            </div>
            <div className="tp-rent-user-content">
              <h5 className="tp-rent-user-content-title">{item.userName}</h5>
              <span>{item.userRole}</span>
            </div>
          </div>
          <div className="tp-rent-option d-flex">
            <button onClick={() => handleAddToCompire(item)}>
              <span>
                <CompireSvg />
              </span>{" "}
            </button>
            <button onClick={() => dispatch(toggle_wishlist(item))}>
              <span>
                {" "}
                {isWishlisted ? <ActiveWishListSvg /> : <WishListSvg />}
              </span>
            </button>
            <button onClick={() => handleAddToCart(item)}>
              <span>
                <CartSvg />
              </span>
            </button>
          </div>
        </div>
        {item.showTags && (
          <div className="tp-rent-tags">
            {item.isForRent === true ? <Link href="#">FOR RENT</Link> : ""}{" "}
            {item.isFeatured === true ? (
              <Link className="two" href="#">
                FEATURED
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      <div className="col-xl-6 tp-rent-content">
        <h4 className="tp-rent-title">
          <Link className="textline" href={`/${item.linkUrl}/${item.id}`}>
            {item.title}
          </Link>
        </h4>
        <p>{item.address}</p>
        <div className="tp-rent-meta-list d-flex justify-content-between align-items-center">
          <div className="tp-rent-meta-item">
            <div className="tp-rent-meta-content d-flex">
              <span>
                <BedroomsSvg />
              </span>
              <p>{item.bedrooms}</p>
            </div>
            <p>Bedrooms</p>
          </div>
          <div className="tp-rent-meta-item">
            <div className="tp-rent-meta-content d-flex">
              <span>
                <BathroomsSvg />
              </span>
              <p>{item.bathrooms}</p>
            </div>
            <p>Bathrooms</p>
          </div>
          <div className="tp-rent-meta-item">
            <div className="tp-rent-meta-content d-flex">
              <span>
                <LivingSvg />
              </span>
              <p>{item.livingArea}</p>
            </div>
            <p>Living Area</p>
          </div>
        </div>
        <div className="tp-rent-btn-box d-flex justify-content-between align-items-center">
          <div className="tp-rent-btn">
            <Link className="tp-btn" href={`/${item.linkUrl}/${item.id}`}>
              View Details
            </Link>
          </div>
          <div className="tp-rent-price">
            <span>{formatPrice(item.price, true)}</span>
          </div>
        </div>
      </div>
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
      `}</style>
    </div>
  );
}
