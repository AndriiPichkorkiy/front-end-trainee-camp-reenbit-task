import styled from "styled-components";

export const BackButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Karla";
  font-weight: 700;
  font-size: 18px;
  line-height: calc(21px / 18px);

  position: absolute;
  top: 21px;
  left: 50px;
  background: none;
  border: none;

  cursor: pointer;

  transition-property: transform;
  &:hover {
    transform: scale(1.1);
  }
`;
