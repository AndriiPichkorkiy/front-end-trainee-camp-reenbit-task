import { CardListContainer } from "./Card.styled";
import CardItem from "./CardItem";

const CardList = ({ characters, from }) => {
  return (
    <CardListContainer>
      {characters.map(char => <CardItem char={char} key={char.id} from={from} />)}
    </CardListContainer>
  );
}

export default CardList;