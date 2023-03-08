import styled from "styled-components";

export const CardListContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  row-gap: 24px;
  column-gap: 20px;

  &::after {
    content: "";
    width: 240px;
    /* margin: 4px; */
  }
`;
export const Card = styled.li`
  width: 240px;
  height: 240px;
  /* margin: 4px; */

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;
export const CardImageWrapper = styled.div`
  height: 70%;
  overflow: hidden;
  cursor: pointer;
  &:hover > img {
    transform: scale(1.1);
  }
`;
export const CardTitleContainer = styled.div`
  height: 30%;
  padding: 12px;
`;
export const CardTitle = styled.h3`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin: 0rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CardSubTitle = styled.h4`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin: 0rem;

  letter-spacing: 0.25px;

  /* Black / Medium Emphasis */

  color: rgba(0, 0, 0, 0.6);
`;
