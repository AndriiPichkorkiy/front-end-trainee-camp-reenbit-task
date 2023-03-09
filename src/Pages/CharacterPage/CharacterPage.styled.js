import styled from "styled-components";
import { H1Title, H2Title } from "../../Components/Common/Common.styled";

export const PageContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 320px;
  margin: 0 auto;
  padding-top: 76px;
`;

export const AvatarContainer = styled.div`
  height: 300px;
  width: 300px;

  border-radius: 90%;
  overflow: hidden;
`;

export const CharTitle = styled(H1Title)`
  margin-top: 16px;
  margin-bottom: 0;
`;

export const InfoTitle = styled(H2Title)`
  margin-top: 48px;
  margin-bottom: 0;
`;

export const InfoList = styled.ul`
  margin-top: 48px;
  /* max-width: 412px; */
  width: 100%;
`;

export const InfoItem = styled.li`
  display: block;
  padding: 10px 16px;
  border-bottom: rgba(33, 33, 33, 0.08) 1px solid;
`;
