import styled from "styled-components";

export const PanelContainer = styled.div`
  position: absolute;
  top: 21px;
  right: 50px;
  display: flex;
`;

export const AuthLink = styled.button`
  background: none;
  text-decoration: underline;
  border: none;
  padding: 0;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
    color: #aaa;
  }
`;
