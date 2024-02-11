import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: inline-block;

  .hidden-checkbox {
    display: none;
  }

  .styled-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #0083ca;
    transition: all 150ms;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
  }

  .styled-checkbox.checked {
    background-color: #0083ca; /* Change as needed */
    border-color: #0083ca; /* Change as needed */
  }
`;

const CustomCheckbox = ({ id = "custom", checkedColor = "#0083CA" }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StyledWrapper>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden-checkbox"
      />
      <label
        htmlFor={id}
        className="styled-checkbox"
        style={{
          backgroundColor: checked ? checkedColor : "transparent",
          borderColor: "#0083CA",
        }}
      />
    </StyledWrapper>
  );
};

export default CustomCheckbox;
