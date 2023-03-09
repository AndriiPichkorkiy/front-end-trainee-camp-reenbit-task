import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 86px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Hero = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 200px;

  &:hover {
    transform: scale(1.05);
  }
`;
export const HeroImage = styled.img`
  height: 100%;
`;
export const SearchSection = styled.div`
  margin-top: 16px;
  position: relative;
`;
export const SearchHint = styled.div`
  /* top: -20px; */
  position: absolute;
`;
export const CardSection = styled.div`
  margin-top: 24px;
`;
