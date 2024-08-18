import { PersonCard } from "../components/display/PersonCard";
import { Grid } from "../components/layout/Grid";
import { SWAPI_PEOPLE_URL } from "../constants";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { PersonAPIObject, PersonAPIResponse } from "../types";

const PersonWithPlanet: React.FC<{ person: PersonAPIObject }> = ({
  person,
}) => {
  const { data: planetDetails } = useHttpRequest(person?.homeworld);

  return (
    <PersonCard
      name={person?.name}
      gender={person?.gender}
      planet={planetDetails?.name}
    />
  );
};

export const PeopleList = () => {
  const { data: people } = useHttpRequest<PersonAPIResponse>(SWAPI_PEOPLE_URL);

  return (
    <Grid columnsMobile={1} columnsDesktop={2}>
      {Array.isArray(people?.results)
        ? people.results.map((person) => <PersonWithPlanet person={person} />)
        : "No data"}
    </Grid>
  );
};
