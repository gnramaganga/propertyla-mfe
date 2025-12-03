"use client";

import { useFormContext } from "react-hook-form";
import { PropertyFormData } from "@/schemas/validationSchema";
import "../property.css";

export default function BasicDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PropertyFormData>();

  return (
    <div className="tp-dashboard-new-property mb-15">
      <h5 className="tp-dashboard-new-title">
        Start posting your property, it's Free
      </h5>
      <h6 className="tp-dashboard-new-title">Add basic details</h6>
      <div className="tp-dashboard-new-property-box">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-dashboard-new-input">
              <label>You're looking for</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("listingType")} className="listDropDown">
                  <option value="">Select</option>
                  <option value="Rent">Rent / Lease</option>
                  <option value="Sale">Sale</option>
                </select>
              </div>
              <div>
                {errors.listingType && (
                  <p className="err-msg">{errors.listingType.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-dashboard-new-input">
              <label>And it's a </label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("propertyType")} className="listDropDown">
                  <option value="">Select</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condominium">Condominium</option>
                  <option value="Landed House">Landed House</option>
                  <option value="Landed House">Bungalow</option>
                  <option value="Landed House">Serviced Residence</option>
                  <option value="Landed House">Office</option>
                  <option value="Landed House">Shop Lot</option>
                  <option value="Landed House">Land</option>
                </select>
              </div>
              <div>
                {errors.propertyType && (
                  <p className="err-msg">{errors.propertyType.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-dashboard-new-input">
              <label>Your contact details for the buyer to reach you</label>
              <input
                className="textBox"
                type="text"
                {...register("phoneNumber")}
                placeholder="+601126367459"
              />
              {errors.phoneNumber && (
                <p className="err-msg">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-dashboard-new-input">
              <label>Give a nice title to your property</label>
              <input
                className="textBox"
                type="text"
                {...register("propertyName")}
                placeholder="Spacious 3-Bedroom Condo in Mont Kiara"
              />
              {errors.propertyName && (
                <p className="err-msg">{errors.propertyName.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-dashboard-new-input">
              <label>Write short descrition about your property</label>
              <textarea
                placeholder="Describe features, nearby schools, shopping malls, transportation, etc."
                {...register("description")}
              ></textarea>
              {errors.description && (
                <p className="err-msg">{errors.description.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label> Listing Type </label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("listingType")} className="listDropDown">
                  <option value="">Select</option>
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                </select>
              </div>
              <div>
                {errors.listingType && (
                  <p className="err-msg">{errors.listingType.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Property Type </label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("propertyType")} className="listDropDown">
                  <option value="">Select</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condominium">Condominium</option>
                  <option value="Landed House">Landed House</option>
                  <option value="Landed House">Bungalow</option>
                  <option value="Landed House">Serviced Residence</option>
                  <option value="Landed House">Office</option>
                  <option value="Landed House">Shop Lot</option>
                  <option value="Landed House">Land</option>
                </select>
              </div>
              <div>
                {errors.propertyType && (
                  <p className="err-msg">{errors.propertyType.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Tenure</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("tenure")} className="listDropDown">
                  <option value="">Select</option>
                  <option value="Freehold">Freehold</option>
                  <option value="Leasehold">Leasehold</option>
                </select>
              </div>
              <div>
                {errors.tenure && (
                  <p className="err-msg">{errors.tenure.message}</p>
                )}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
