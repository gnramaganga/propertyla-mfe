"use client";
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

  return (
    <>
      {/* property details slider  */}
      <section className="tp-property-details-area pt-80 pb-130">
        <div className="container">
          <div className="row">
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
            <div className="col-lg-6">
              <div className="thumbnail-container">
                <Image
                  src={ApartmentIcon1}
                  style={{
                    width: "100%",
                    height: "auto",
                    marginTop: "13px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  alt={"image"}
                  //onClick={() => openModal()}
                />
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="tp-property-details-right-side text-lg-end mb-70">
                <div className="tp-property-details-icon-box">
                  <button>
                    <span>
                      <BookmarkSvg />
                    </span>
                  </button>
                  <button
                    onClick={() => property && handleAddToCompire(property)}
                  >
                    <span>
                      <CompireSvgTwo />
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      property && dispatch(toggle_wishlist(property))
                    }
                  >
                    <span>
                      {isWishlisted ? (
                        <ActiveWishListSvg width="26" height="26" />
                      ) : (
                        <WishListSvg width="20" height="20" />
                      )}{" "}
                    </span>
                  </button>
                  <button onClick={() => property && handleAddToCart(property)}>
                    <span>
                      <CartSvg width="24" height="24" />
                    </span>
                  </button>
                </div>
                <h4 className="tp-property-details-icon-price">
                  ${property?.price}
                </h4>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container-fluid gx-0">
          {/* <PropertyDetailsSlider /> */}
        </div>
      </section>
      {/* property details slider */}

      {/* property-details area */}
      <DetailsReusableArea />
      {/* property-details area end */}
    </>
  );
}
