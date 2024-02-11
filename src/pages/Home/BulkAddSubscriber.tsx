import styled from "styled-components";
import { Title } from "../../components/Title";
import { RadiusBox } from "../../components/RadiusBox";
import { UploadFileButton } from "../../components/UploadFileButton";
import { CustomButton } from "../../components/CustomButton";

export const BulkAddSubscriber = () => {
  return (
    <RadiusBox style={{ width: "100%" }}>
      <Title type="subtitle" text="Bulk Add Subscriber" />
      <span style={{ marginBottom: "16px", marginTop: "16px" }}>
        To bulk add subscribers, download and fill out this spreadsheet
        template. Only properly formatted files will add numbers successfully.
      </span>
      <UploadFileButton text="Upload File" />
      <br />
      <CustomButton text="Submit Numbers" />
    </RadiusBox>
  );
};
