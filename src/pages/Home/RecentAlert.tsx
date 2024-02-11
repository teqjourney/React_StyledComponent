import { RadiusBox } from "../../components/RadiusBox";
import { Title } from "../../components/Title";
import { getCurrentDate } from "../../util/functions";

export const RecentAlert = () => {
  return (
    <RadiusBox style={{ width: "100%" }}>
      <Title
        type="subtitle"
        text={`Most recent Message (${getCurrentDate()})`}
      />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </span>
    </RadiusBox>
  );
};
