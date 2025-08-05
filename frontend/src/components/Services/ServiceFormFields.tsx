import React from "react";
import { InputField, SelectField, TextareaField } from "../../utils/FormFields";

type ServiceFieldsProps = {
  selectedService: string;
};

const ServiceFormFields: React.FC<ServiceFieldsProps> = ({
  selectedService,
}) => {
  switch (selectedService) {
    case "workshops":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Organization / Institution Name" />
          <InputField label="Preferred Date & Duration" />
          <InputField label="Type of Workshop (Red Teaming / Blue Teaming / OSINT etc.)" />
          <SelectField label="Mode" options={["On-Campus", "Virtual"]} />
          <TextareaField label="Additional Notes" />
        </>
      );

    case "webinars":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Institution / Community Name" />
          <SelectField
            label="Target Audience"
            options={["Students", "Faculty", "Professionals"]}
          />
          <InputField label="Topic of Interest (Awareness / Careers / Trends etc.)" />
          <InputField label="Expected Date" />
          <TextareaField label="Additional Notes" />
        </>
      );

    case "cyberinvestigations":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Organization / Client Type" />
          <SelectField
            label="Type of Case"
            options={["Fraud", "Identity Theft", "Data Breach", "Others"]}
          />
          <TextareaField label="Brief Description of the Issue" />
          <InputField label="Preferred Contact Time" />
          <SelectField
            label="Confidentiality / NDA Required"
            options={["Yes", "No"]}
          />
        </>
      );

    case "sessions":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Institution or Group Name" />
          <InputField label="Session Topic" />
          <InputField label="Audience Size" />
          <InputField label="Preferred Date and Time" />
          <SelectField label="Mode" options={["On-Campus", "Online"]} />
          <TextareaField label="Additional Notes" />
        </>
      );

    default:
      return (
        <p className="text-neutral-500 text-sm italic">
          Select a valid service to view form fields.
        </p>
      );
  }
};

export default ServiceFormFields;
