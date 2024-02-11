import { RadiusBox } from "../../components/RadiusBox";
import { Title } from "../../components/Title";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";
import Multiselect from "multiselect-react-dropdown";
import CustomCheckbox from "../../components/CustomCheckbox";
import { CustomButton } from "../../components/CustomButton";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

interface RegionOption {
  id: string;
  name: string;
}

const RegionOptions: RegionOption[] = [
  {
    name: "Scioto County",
    id: "Scioto County",
  },
  {
    name: "Northern Kentucky",
    id: "Northern Kentucky",
  },
];

export const AddSubscriber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionOption[]>([]);

  const onSelectRegion = (
    selectedList: RegionOption[],
    selectedItem: RegionOption
  ) => {
    setSelectedRegion(selectedList);
  };

  const onRemoveRegion = (
    selectedList: RegionOption[],
    removedItem: RegionOption
  ) => {
    setSelectedRegion(selectedList);
  };

  return (
    <RadiusBox style={{ width: "100%" }}>
      <Title type="subtitle" text="Add Subscriber" />
      <StyledWrapper style={{ marginTop: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Phone Number
          </span>
          <PhoneInput
            country={"us"}
            value={phoneNumber}
            onChange={(value) => value && setPhoneNumber(value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Region(s)
          </span>
          <Multiselect
            options={RegionOptions}
            selectedValues={selectedRegion}
            onSelect={onSelectRegion}
            onRemove={onRemoveRegion}
            displayValue="name"
          />
        </div>
      </StyledWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          marginTop: "20px",
          marginBottom: "16px",
        }}
      >
        <CustomCheckbox />
        <span>
          I certify that this individual gave me their consent to sign them up
          for this alerts system.
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CustomButton text="Add number" />
      </div>
    </RadiusBox>
  );
};
