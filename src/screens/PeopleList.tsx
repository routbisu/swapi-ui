import {
  FastForward,
  MagnifyingGlass,
  Rewind,
  SkipBack,
  SkipForward,
} from "@phosphor-icons/react";
import { PersonCard, PersonCardProps } from "../components/display/PersonCard";
import { Button } from "../components/inputs/Button";
import { Grid } from "../components/layout/Grid";
import { Stack } from "../components/layout/Stack";
import { SWAPI_PEOPLE_PAGE_SIZE, SWAPI_PEOPLE_URL } from "../constants";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { PersonAPIObject, PersonAPIResponse } from "../types";
import { useState } from "react";
import { Typography } from "../components/display/Typography";
import { Textfield } from "../components/inputs/Textfield";
import { PersonDetails } from "./PersonDetails";

const PeopleListLoadingView: React.FC<{ cardsCount?: number }> = ({
  cardsCount = 10,
}) => {
  return new Array(cardsCount)
    .fill(null)
    .map((_, idx) => <PersonCard key={idx} isLoading />);
};

const PersonWithPlanet: React.FC<{
  person: PersonAPIObject;
  onClick: PersonCardProps["onClick"];
}> = ({ person, onClick }) => {
  const { data: planetDetails, isLoading: isPlanetLoading } = useHttpRequest(
    person?.homeworld
  );

  return (
    <PersonCard
      name={person?.name}
      gender={person?.gender}
      planet={planetDetails?.name}
      isPlanetLoading={isPlanetLoading}
      onClick={onClick}
    />
  );
};

export const PeopleList = () => {
  const [selectedPerson, setSelectedPerson] = useState<
    PersonAPIObject | undefined
  >();
  const [peopleUrl, setPeopleUrl] = useState<string>(SWAPI_PEOPLE_URL);
  const { data: people, isLoading: isListLoading } = useHttpRequest<
    false,
    PersonAPIResponse
  >(peopleUrl);

  const pageCount = Math.ceil(
    Number(people?.count || 0) / SWAPI_PEOPLE_PAGE_SIZE
  );

  const handlePersonDetailsClick = (person: PersonAPIObject) => {
    setSelectedPerson(person);
  };

  if (selectedPerson) {
    return (
      <PersonDetails
        person={selectedPerson}
        onClose={() => setSelectedPerson(undefined)}
      />
    );
  }

  return (
    <Stack direction="column" gap={24}>
      <Stack align="center" justify="space-between">
        <Button />

        <Textfield
          placeholder="Search"
          icon={MagnifyingGlass}
          onChange={(searchKey) =>
            setPeopleUrl(`${SWAPI_PEOPLE_URL}/?search=${searchKey}`)
          }
        />
      </Stack>

      {Array.isArray(people?.results) && people.results.length ? (
        <Grid columnsMobile={1} columnsDesktop={2} gap={20}>
          {people.results.map((person, idx) => (
            <PersonWithPlanet
              person={person}
              key={idx}
              onClick={() => handlePersonDetailsClick(person)}
            />
          ))}
        </Grid>
      ) : isListLoading ? (
        <Grid columnsMobile={1} columnsDesktop={2} gap={20}>
          <PeopleListLoadingView />
        </Grid>
      ) : (
        <Stack justify="center">
          <Typography variant="h2">No people found</Typography>
        </Stack>
      )}

      <Stack direction="column" align="center">
        <Stack gap={16}>
          <Button
            startIcon={Rewind}
            onClick={() => people?.previous && setPeopleUrl(SWAPI_PEOPLE_URL)}
            disabled={!people?.previous}
          >
            First
          </Button>
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
          <Button
            endIcon={FastForward}
            disabled={!people?.next}
            onClick={() =>
              pageCount > 0 &&
              setPeopleUrl(`${SWAPI_PEOPLE_URL}/?page=${pageCount}`)
            }
          >
            Last
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
