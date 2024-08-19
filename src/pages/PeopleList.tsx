import { SkipBack, SkipForward } from "@phosphor-icons/react";
import { PersonCard } from "../components/display/PersonCard";
import { Button } from "../components/inputs/Button";
import { Grid } from "../components/layout/Grid";
import { Stack } from "../components/layout/Stack";
import { SWAPI_PEOPLE_URL } from "../constants";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { PersonAPIObject, PersonAPIResponse } from "../types";
import { useState } from "react";

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
  const [peopleUrl, setPeopleUrl] = useState<string>(SWAPI_PEOPLE_URL);
  const { data: people } = useHttpRequest<PersonAPIResponse>(peopleUrl);

  return (
    <Stack direction="column" gap={24}>
      <Grid columnsMobile={1} columnsDesktop={2} gap={20}>
        {Array.isArray(people?.results)
          ? people.results.map((person) => <PersonWithPlanet person={person} />)
          : "No data"}
      </Grid>

      <Stack direction="column" align="center">
        <Stack gap={16}>
          <Button
            startIcon={SkipBack}
            onClick={() => people?.previous && setPeopleUrl(people.previous)}
            disabled={!people?.previous}
          />
          <Button
            endIcon={SkipForward}
            onClick={() => people?.next && setPeopleUrl(people.next)}
            disabled={!people?.next}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
