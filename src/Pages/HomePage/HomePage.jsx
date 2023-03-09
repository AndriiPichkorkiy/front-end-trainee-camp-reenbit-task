import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { personsApi } from "../../Api/personsApi";
import CardList from "../../Components/Card/CardList";
import SearchField from "../../Components/SearchField/SearchField";
import { Hero, HeroImage, PageContainer, SearchSection, CardSection, SearchHint } from "./HomePage.styled";
import heroImg from '../../assest/heroImg.png'
import { sortArrByName } from "../../helpers/sortArrByName";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const HomePage = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("")

  const from = document.location.pathname + document.location.search

  const onChangeInput = (value) => {
    setSearchParams({ name: value })
    setQuery(value)
  }

  const getAllСharacter = async () => {
    setIsLoading(true)
    const data = await personsApi.getСharacterByPages();
    setCharacters(sortArrByName(data.results))
    // setSearchParams({})
    setIsLoading(false)
  }

  const getOnlyCharacterByName = async () => {
    setIsLoading(true)
    const data = await personsApi.getFiltredCharacters({ name: query })
    if (!data) setCharacters([])
    else setCharacters(sortArrByName(data.results))
    setIsLoading(false)
  }

  useEffect(() => {
    if (query) return
    getAllСharacter();
  }, [query])

  useEffect(() => {
    const queryFromUrl = searchParams.get('name')
    if (queryFromUrl && queryFromUrl.length >= 3) {
      if (queryFromUrl) onChangeInput(queryFromUrl)
      return
    }

    getAllСharacter();
  }, [])

  useEffect(() => {
    if (query.length < 3) return
    getOnlyCharacterByName()
  }, [query])

  return (
    <PageContainer>
      <Hero>
        <Link to='/'><HeroImage src={heroImg} /></Link>
      </Hero>
      <SearchSection>
        <SearchField callback={onChangeInput} value={query} />
        <SearchHint>{query && (query.length < 3)
          ? "At least 3 symbols"
          : null}
        </SearchHint>
      </SearchSection>
      {isLoading
        ? <LoadingSpinner />
        :
        <CardSection>
          <CardList characters={characters} from={from} />
        </CardSection>
      }
    </PageContainer>
  );
}

export default HomePage;