import {
  FastForward,
  Heart,
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
import { useEffect, useState } from "react";
import { Typography } from "../components/display/Typography";
import { Textfield } from "../components/inputs/Textfield";
import { PersonDetails } from "./PersonDetails";
import { Favourites } from "./Favourites";
import { DarthVaderGraphic } from "../components/media/DarthVaderGraphic";

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
  const [showFavourites, setShowFavorites] = useState<boolean>();
  const [searchKey, setSearchKey] = useState<string>();
  const [selectedPerson, setSelectedPerson] = useState<
    PersonAPIObject | undefined
  >();
  const [peopleUrl, setPeopleUrl] = useState<string>(SWAPI_PEOPLE_URL);

  useEffect(() => {
    setPeopleUrl(
      searchKey ? `${SWAPI_PEOPLE_URL}/?search=${searchKey}` : SWAPI_PEOPLE_URL
    );
  }, [searchKey]);

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

  /** Show a selected person's details */
  if (selectedPerson) {
    return (
      <PersonDetails
        person={selectedPerson}
        onClose={() => setSelectedPerson(undefined)}
      />
    );
  }

  /** Show favourite characters only */
  if (showFavourites) {
    return <Favourites onClose={() => setShowFavorites(false)} />;
  }

  const noDataView = (
    <div style={{ padding: 50 }}>
      <Stack direction="column" align="center" gap={20}>
        <DarthVaderGraphic />
        <Stack direction="column" align="center" gap={10}>
          <Typography variant="h2">No people found</Typography>
          <Typography variant="body2" color="secondary">
            Try adjusting your search keywords
          </Typography>
        </Stack>
      </Stack>
    </div>
  );

  return (
    <Stack direction="column" gap={24}>
      <Stack align="center" justify="space-between">
        <Button startIcon={Heart} onClick={() => setShowFavorites(true)}>
          Favourites
        </Button>

        <Textfield
          placeholder="Search"
          icon={MagnifyingGlass}
          onChange={setSearchKey}
          defaultValue={searchKey}
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
        noDataView
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
