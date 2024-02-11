import styled from "styled-components";
import { RadiusBox } from "../components/RadiusBox";
import { RegionAlert } from "./Home/RegionAlert";
import { GrowthChart } from "./Home/GrowthChart";
import { RecentAlert } from "./Home/RecentAlert";
import { AddSubscriber } from "./Home/AddSubscriber";
import { BulkAddSubscriber } from "./Home/BulkAddSubscriber";

const StyledWrap = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface StyledGrid2x1Props {
  height?: string;
}

const StyledGrid2x1 = styled.div<StyledGrid2x1Props>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  height: ${(props) => props.height || "auto"};
  margin-bottom: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Home = () => {
  return (
    <StyledWrap>
      <StyledGrid2x1 height="400px">
        <div style={{ display: "flex", minWidth: "calc(50% - 9px)" }}>
          <RegionAlert />
        </div>
        <div style={{ display: "flex", minWidth: "calc(50% - 9px)" }}>
          <GrowthChart />
        </div>
      </StyledGrid2x1>
      <StyledGrid2x1>
        <RecentAlert />
      </StyledGrid2x1>
    </StyledWrap>
  );
};
