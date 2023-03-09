import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { personsApi } from "../../Api/personsApi";
import BackButton from "../../Components/BackButton/BackButton";
import { H3Title, H4Title } from "../../Components/Common/Common.styled";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { AvatarContainer, CharTitle, InfoItem, InfoList, InfoTitle, PageContainer } from "./CharacterPage.styled";

const CharacterPage = ({ char: propChar }) => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  const [char, setChar] = useState(null)


  useEffect(() => {
    if (propChar) {
      setChar(char)
      setIsLoading(false)
    } else {
      personsApi.getSingleCharacter(id)
        .then(setChar)
        .finally(() => setIsLoading(false))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <p>loading...</p>

  const {
    name = "unknow",
    image: src,
    gender = "unknow",
    status = "unknow",
    species = "unknow",
    origin: { name: origin } = "unknow",
    type = "unknow"
  } = char

  return (
    <PageContainer>
      <BackButton />
      {isLoading
        ? <LoadingSpinner />
        : <>
          <AvatarContainer>
            <img src={src} alt="avatar" />
          </AvatarContainer>

          <CharTitle>{name}</CharTitle>

          <InfoTitle>Informations</InfoTitle>
          <InfoList>
            <InfoItem>
              <H3Title>Gender:</H3Title>
              <H4Title>{gender}</H4Title>
            </InfoItem>
            <InfoItem>
              <H3Title>Status:</H3Title>
              <H4Title>{status}</H4Title>
            </InfoItem>
            <InfoItem>
              <H3Title>Species:</H3Title>
              <H4Title>{species}</H4Title>
            </InfoItem>
            <InfoItem>
              <H3Title>Origin:</H3Title>
              <H4Title>{origin}</H4Title>
            </InfoItem>
            <InfoItem>
              <H3Title>Type:</H3Title>
              <H4Title>{type || "unknow"}</H4Title>
            </InfoItem>
          </InfoList>
        </>

      }

    </PageContainer>

  );
}

export default CharacterPage;