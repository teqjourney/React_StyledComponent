import styled from "styled-components";

const StyleWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  margin: 12px;
`;
const StyledBar = styled.div`
  background: red;
  width: 16px;
  height: 80px;
`;

type NewMilestoneReachedProps = {
  number: string;
};

export const NewMilestoneReached = ({ number }: NewMilestoneReachedProps) => {
  return (
    <StyleWrap>
      <StyledBar />
      <div style={{ display: "flex", flexDirection: "column", margin: "12px" }}>
        <span
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          NEW INVOICE REACHED!
        </span>
        <span>{`${number} subscribers`}</span>
      </div>
    </StyleWrap>
  );
};
