import React from "react";
import { InputField, SelectField, TextareaField } from "../../utils/FormFields";

type PartnerFieldsProps = {
  selectedPartnerType: string;
};

const PartnerFormFields: React.FC<PartnerFieldsProps> = ({
  selectedPartnerType,
}) => {
  switch (selectedPartnerType) {
    case "Global / International Partner":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number (with Country Code)" />
          <InputField label="Organization / Institution Name" />
          <InputField label="Country / Region" />
          <InputField label="Type of Collaboration (Joint Webinar / Awareness Campaign / Research / Knowledge Sharing)" />
          <SelectField
            label="Preferred Mode"
            options={["Virtual", "In-Person", "Hybrid"]}
          />
          <InputField label="Any Previous Initiative or Reference" />
          <TextareaField label="Additional Notes" />
        </>
      );

    case "Brand Ambassador":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Institution / Organization Name" />
          <InputField label="Current Role / Year (e.g., 2nd Year B.Tech Student)" />
          <InputField label="Region / City" />
          <TextareaField label="Why Do You Want to Become an Ambassador? (Short Answer)" />
          <InputField label="Any Relevant Experience (Event Handling / Promotion / Community Work)" />
          <InputField label="Social Links (LinkedIn, Instagram, etc.)" />
          <TextareaField label="Additional Notes" />
        </>
      );

    case "Community Partner":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Name of Community / Group" />
          <InputField label="Location / City" />
          <InputField label="Social Links or Website (if available)" />
          <TextareaField label="Collaboration Goals (Short Description)" />
          <InputField label="Estimated Community Size" />
          <TextareaField label="Additional Notes" />
        </>
      );

    case "Academic Partner":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Institution / College Name" />
          <InputField label="Designation / Role (if applicable)" />
          <InputField label="Location (City/State)" />
          <InputField label="Type of Collaboration (Workshops / Internships / Curriculum Support)" />
          <SelectField
            label="Preferred Mode"
            options={["Online", "On-Campus"]}
          />
          <TextareaField label="Additional Notes" />
        </>
      );

    case "Event Partner / Sponsor":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Event Name" />
          <InputField label="Type (Tech Fest / Summit / Webinar Series)" />
          <InputField label="Organization / Institute Hosting the Event" />
          <InputField label="Event Date(s)" />
          <InputField label="Expected Audience Size" />
          <InputField label="Type of Support Required (Session / Workshop / Sponsorship / CTF)" />
          <InputField label="Any Past Event Link (if available)" />
          <TextareaField label="Additional Notes" />
        </>
      );

    case "Corporate Partner":
      return (
        <>
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Contact Number" />
          <InputField label="Company Name" />
          <InputField label="Designation / Role" />
          <InputField label="Organization Website" />
          <InputField label="Area of Interest (Sponsorship / Research / Talent Access / Joint Events)" />
          <InputField label="Expected Collaboration Timeline" />
          <TextareaField label="Additional Notes or Proposal Brief" />
        </>
      );

    default:
      return (
        <p className="text-neutral-500 text-sm italic">
          Select a valid partner type to view form fields.
        </p>
      );
  }
};

export default PartnerFormFields;
