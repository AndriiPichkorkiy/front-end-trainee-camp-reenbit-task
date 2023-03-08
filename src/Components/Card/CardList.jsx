import CardItem from "./CardItem";

const CardList = ({ characters, from }) => {
  return (
    <ul>
      {characters.map(char => <CardItem char={char} key={char.id} from={from} />)}
    </ul>
  );
}

export default CardList;