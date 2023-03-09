import styled from "styled-components";

export const ContainerCenter = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 320px;
`;

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitelInput = styled.span`
  margin-top: 1rem;
  display: block;
`;

export const FormFooter = styled.div`
  margin-top: 1rem;
`;

export const FormFooterLink = styled.button`
  background: none;
  text-decoration: underline;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
    color: #aaa;
  }
`;

export const ServicesEnterContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
`;

export const StyledButton = styled.button`
  /* width: 100%; */
  margin: 0.5rem auto;
  padding: 0.3rem;
  flex: 1 1 0;
  width: 100px;
  cursor: pointer;

  border-radius: 4px;
  border-width: 0px;
  background: "#333";

  ${({ coloredBtn }) => {
    if (coloredBtn)
      return {
        "margin-top": "1rem",
        background: "#999",
        color: "white",
      };
  }}

  ${({ Service }) => {
    if (Service)
      return {
        "margin-left": "1rem",
        "margin-right": "1rem",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        color: "#4E4F50",
      };
  }}


  &:hover {
    background: #aaa;
    /* color: white; */
  }
`;
