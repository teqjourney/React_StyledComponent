import styled from "styled-components";

const StyleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  margin: 12px;
`;
const StyledBar = styled.div`
  background: #0083ca;
  width: 16px;
  height: 70px;
`;

type NewCommunityAlertProps = {
  drug_name: string;
  area: string;
  date: string;
};

export const NewCommunityAlert = ({
  drug_name,
  area,
  date,
}: NewCommunityAlertProps) => {
  return (
    <StyleWrap>
      <StyledBar />
      <div style={{ margin: "12px", display: "flex", flexDirection: "column" }}>
        <span
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          COMMUNITY ALERT
        </span>
        <span>{`${drug_name} in ${area} - submitted ${date}`}</span>
      </div>
    </StyleWrap>
  );
};
