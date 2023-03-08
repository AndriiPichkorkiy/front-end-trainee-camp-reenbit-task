import styled from "styled-components";

export const PageContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  /* padding-top: 76px; */
`;

export const BackButton = styled.button`
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

export const AvatarContainer = styled.div`
  height: 300px;
  width: 300px;

  border-radius: 90%;
  overflow: hidden;
`;

export const CharTitle = styled.h1`
  margin-top: 16px;
  margin-bottom: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 48px;
  /* line-height: 1.1667%; */

  /* text-align: center; */

  color: #081f32;
`;

export const InfoTitle = styled.h2`
  margin-top: 48px;
  margin-bottom: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;

  letter-spacing: 0.15px;

  /* Graybase / Gray 1 */
  color: #8e8e93;
`;

export const InfoList = styled.ul`
  margin-top: 48px;
  max-width: 412px;
`;

export const InfoItem = styled.li`
  display: block;
  padding: 10px 16px;
  border-bottom: rgba(33, 33, 33, 0.08) 1px solid;
`;
