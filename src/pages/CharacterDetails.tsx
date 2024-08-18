import { useParams } from "react-router-dom";

export const CharacterDetails = () => {
  const { characterId } = useParams();

  return <div>CharacterDetails : {characterId}</div>;
};
