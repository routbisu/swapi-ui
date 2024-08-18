import { useParams } from "react-router-dom";

export const PersonDetails = () => {
  const { peopleId } = useParams();

  return <div>People Id : {peopleId}</div>;
};
