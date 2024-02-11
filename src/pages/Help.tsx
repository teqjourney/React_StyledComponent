import styled from "styled-components";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;
export const Help = () => {
  return (
    <StyledWrap>
      <span>
        This sample project serves as a practical guide to harnessing the full
        potential of styled-components in your React applications.
      </span>
    </StyledWrap>
  );
};
