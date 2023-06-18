import styled from "styled-components";

const BasicColor1 = "#394050";
const BasicColor2 = "#1556F7";
const BasicColor3 = "#F9FAFB";
const BasicColor4 = "#666666";
const BasicColor5 = "#D9D9D9";

export const allContainer = styled.div`
  margin-top: 2%;
`;

export const mainContainer = styled.div`
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${BasicColor3};
  width: 38%;
  height: 430px;
`;

export const mainContent = styled.div`
  padding-top: 5%;
  padding-left: 5%;
`;

export const mainTitle = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: ${BasicColor4};
`;

export const content = styled.div`
  display: flex;
  padding-top: 6%;
  padding-bottom: 1%;
`;

export const contentTitle = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
  color: ${BasicColor4};
`;

export const contentPoint = styled.h4`
  color: red;
`;

export const titleInput = styled.input`
  ::placeholder {
    color: ${BasicColor5};
  }
  padding-left: 1%;
  background-color: ${BasicColor3};
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-bottom-width: 1;
  border-color: ${BasicColor5};
  width: 94%;
  outline: none;
  height: 30px;
`;

export const mainTextarea = styled.textarea`
  ::placeholder {
    color: ${BasicColor5};
  }
  padding-top: 1%;
  padding-left: 1%;
  background-color: ${BasicColor3};
  border-color: ${BasicColor5};
  width: 94%;
  height: 210px;
  resize: none;
`;

export const subButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 7%;
  height: 40px;
  background: ${BasicColor2};
  border: none;
  color: white;
  border-radius: 5px;
  margin-top: 2%;
  margin-left: 31%;
`;
