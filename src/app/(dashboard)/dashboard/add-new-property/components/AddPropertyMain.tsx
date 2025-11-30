"use client";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { propertySchema, PropertyFormData } from "@/schemas/validationSchema";
import BasicDetails from "./BasicDetails";
import LocationDetails from "./LocationDetails";
import PropertyDetails from "./PropertyDetails";
import AmenitiesDetails from "./AmenitiesDetails";
import UploadMedia from "./UploadMedia";

export default function AddPropertyPage() {
  const methods = useForm<PropertyFormData>({
    resolver: yupResolver(propertySchema),
    mode: "onSubmit",
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<PropertyFormData> = (data) => {
    console.log("✅ Submitted Data:", JSON.stringify(data));
    alert("Form submitted successfully!");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicDetails />
        <LocationDetails />
        <PropertyDetails />
        <AmenitiesDetails />
        <UploadMedia />
        <div className="tp-dashboard-new-btn">
          <button type="submit" className="add">
            Add Property
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
