import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { personsApi } from "../Api/personsApi";
import CardList from "../Components/Card/CardList";
import SearchField from "../Components/SearchField/SearchField";

const HomePage = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("")

  const [isFirstMount, setIsFirstMount] = useState(true)

  // let params = new URLSearchParams(document.location.search);
  const from = document.location.pathname + document.location.search
  console.log('from', from)

  const onChangeInput = (value) => {
    setSearchParams({ name: value })
    setQuery(value)
  }

  useEffect(() => {
    if (query) return

    (async function () {
      const data = await personsApi.getСharacterByPages();
      console.log('data', data)
      setCharacters(data.results)
      setIsLoading(false)
    })()
  }, [query])

  useEffect(() => {
    const queryFromUrl = searchParams.get('name')
    if (queryFromUrl) {
      if (queryFromUrl) onChangeInput(queryFromUrl)
      return
    }

    (async function () {
      setIsLoading(true)
      const data = await personsApi.getСharacterByPages();
      setCharacters(data.results)
      setIsLoading(false)
    })()
  }, [])

  useEffect(() => {
    if (query.length < 3) return

    (async function () {
      setIsLoading(true)
      const data = await personsApi.getFiltredCharacters({ name: query })
      setCharacters(data.results)
      setIsLoading(false)
    })()
  }, [searchParams])

  return (
    <>
      <h3>
        home page
      </h3>
      <SearchField callback={onChangeInput} value={query} />
      <CardList characters={characters} from={from} />
    </>
  );
}

export default HomePage;