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
      <h5 className="tp-dashboard-new-title">Property Details</h5>
      <div className="tp-dashboard-new-property-box">
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Price</label>
              <input
                className="textBox"
                type="number"
                {...register("price")}
                placeholder="Enter price"
              />
              {errors.price && (
                <p className="err-msg">{errors.price.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Built Up Area (sq.ft)</label>
              <input
                className="textBox"
                type="text"
                {...register("builtUpArea")}
                placeholder="Enter build up area"
              />
              {errors.builtUpArea && (
                <p className="err-msg">{errors.builtUpArea.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Furnishing</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("furnishing")} className="listDropDown">
                  <option value="Fully Furnished">Fully Furnished</option>
                  <option value="Partially Furnished">
                    Partially Furnished
                  </option>
                  <option value="PUnfurnished">Unfurnished</option>
                </select>
              </div>
              <div>
                {errors.furnishing && (
                  <p className="err-msg">{errors.furnishing.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Age of property</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("ageOfProperty")} className="listDropDown">
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-5 years">1-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>
              <div>
                {errors.ageOfProperty && (
                  <p className="err-msg">{errors.ageOfProperty.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Floor Level</label>
              <input
                className="textBox"
                type="number"
                {...register("floorLevel")}
                placeholder="Enter floor number"
              />
              {errors.floorLevel && (
                <p className="err-msg">{errors.floorLevel.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Bed Rooms</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("bedRooms")} className="listDropDown">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                  <option value="2">6</option>
                </select>
              </div>
              <div>
                {errors.bedRooms && (
                  <p className="err-msg">{errors.bedRooms.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Bath Rooms</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("bathRooms")} className="listDropDown">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                  <option value="2">6</option>
                </select>
              </div>
              <div>
                {errors.bathRooms && (
                  <p className="err-msg">{errors.bathRooms.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Parking</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("parkings")} className="listDropDown">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                </select>
              </div>
              <div>
                {errors.parkings && (
                  <p className="err-msg">{errors.parkings.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Balcony</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("balconies")} className="listDropDown">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                </select>
              </div>
              <div>
                {errors.balconies && (
                  <p className="err-msg">{errors.balconies.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Ownership</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("ownership")} className="listDropDown">
                  <option value="Yes">Freehold</option>
                  <option value="No">Leasehold</option>
                </select>
              </div>
              <div>
                {errors.ownership && (
                  <p className="err-msg">{errors.ownership.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Availability</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("availability")} className="listDropDown">
                  <option value="Immediate">Immediate</option>
                  <option value="Next Month">Next Month</option>
                  <option value="Under Construction">Under Construction</option>
                </select>
              </div>
              <div>
                {errors.availability && (
                  <p className="err-msg">{errors.availability.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-dashboard-new-input">
              <label>Negotiable</label>
              <div className="tp-property-tabs-select tp-select">
                <select {...register("negotiable")} className="listDropDown">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                {errors.negotiable && (
                  <p className="err-msg">{errors.negotiable.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
