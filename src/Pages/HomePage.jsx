import { useEffect, useState } from "react";
import { personsApi } from "../Api/personsApi";
import CardList from "../Components/Card/CardList";

const HomePage = () => {

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    (async function () {
      const data = await personsApi.getСharacterByPages();
      setCharacters(data)
    })()
  }, [])

  return (
    <>
      <h3>
        home page
      </h3>
      <CardList characters={characters} />
    </>
  );
}

export default HomePage;