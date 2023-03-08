import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { personsApi } from "../Api/personsApi";

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
  console.log('char', char)
  const { name, image: src, gender, status, species, origin: { name: origin } } = char

  function goBack() {
    const way = location.state?.from || "/";
    navigate(way, { replace: false });
  }

  return (
    <>
      <button onClick={goBack}>go back</button>
      <img src={src} alt="avatar" />
      <h1>{name}</h1>

      <h2>Informations</h2>
      <ul>
        <li>gender : {gender}</li>
        <li>status : {status}</li>
        <li>species : {species}</li>
        <li>origin : {origin}</li>
      </ul>
    </>

  );
}

export default CharacterPage;