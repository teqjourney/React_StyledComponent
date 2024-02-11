import { NewCommunityAlert } from "../../components/NewCommunityAlert";
import { NewMilestoneReached } from "../../components/NewMilestoneReached";
import { RadiusBox } from "../../components/RadiusBox";
import { Title } from "../../components/Title";
import styled from "styled-components";

const TestResponse = [
  {
    type: "alert",
    drug_name: "Test message",
    area: "CA",
    date: "02/10/2024",
  },
  {
    type: "milestone",
    number: "2",
  },
];

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const RegionAlert = () => {
  return (
    <RadiusBox style={{ width: "100%" }}>
      <Title type="subtitle" text="Messages" />
      <StyledContent>
        {TestResponse.map((item) =>
          item.type === "alert" ? (
            <NewCommunityAlert
              drug_name={item.drug_name!}
              area={item.area!}
              date={item.date!}
            />
          ) : (
            <NewMilestoneReached number={item.number!} />
          )
        )}
      </StyledContent>
    </RadiusBox>
  );
};
