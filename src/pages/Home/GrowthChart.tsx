import { RadiusBox } from "../../components/RadiusBox";
import { Title } from "../../components/Title";
import { WeekGrowthChart } from "../../components/WeekGrowthChart";

const Labels = ["before", "now"];
const Data = [300, 800];
export const GrowthChart = () => {
  return (
    <RadiusBox style={{ width: "100%" }}>
      <Title type="subtitle" text="Growth" />
      <WeekGrowthChart labels={Labels} data={Data} thresholds={700} />
    </RadiusBox>
  );
};
