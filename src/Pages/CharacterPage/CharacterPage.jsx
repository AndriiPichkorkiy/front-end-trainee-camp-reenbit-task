import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { personsApi } from "../../Api/personsApi";
import { AvatarContainer, BackButton, CharTitle, InfoItem, InfoList, InfoTitle, PageContainer } from "./CharacterPage.styled";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CharacterPage = ({ char: propChar }) => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  const [char, setChar] = useState(null)
  const location = useLocation();

  useEffect(() => {
    if (propChar) {
      console.log('propChar', propChar)
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

  const { name, image: src, gender, status, species, origin: { name: origin } } = char

  function goBack() {
    const way = location.state?.from || "/";
    // navigate(way, { replace: true });
    navigate(-1, { replace: false });
  }

  return (
    <PageContainer>
      <BackButton onClick={goBack}> <ArrowBackIcon style={{ "margin-right": "12px" }} size={16} /> Go back</BackButton>
      <AvatarContainer>
        <img src={src} alt="avatar" />
      </AvatarContainer>

      <CharTitle>{name}</CharTitle>

      <InfoTitle>Informations</InfoTitle>
      <InfoList>
        <InfoItem>gender : {gender}</InfoItem>
        <InfoItem>status : {status}</InfoItem>
        <InfoItem>species : {species}</InfoItem>
        <InfoItem>origin : {origin}</InfoItem>
      </InfoList>
    </PageContainer>

  );
}

export default CharacterPage;