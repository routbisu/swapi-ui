import { CaretLeft } from "@phosphor-icons/react";
import { PersonDetailsCard } from "../components/display/PersonDetailsCard";
import { Button } from "../components/inputs/Button";
import { Stack } from "../components/layout/Stack";
import { PersonAPIObject } from "../types";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { useMemo } from "react";

type PersonDetailsProps = {
  person: PersonAPIObject;
  /** Close this view and go back to lists page */
  onClose: () => void;
};

export const PersonDetails: React.FC<PersonDetailsProps> = ({
  person,
  onClose,
}) => {
  /** Fetch planet, films and starship details */
  const { data: planetDetails, isLoading: isPlanetLoading } = useHttpRequest(
    person?.homeworld
  );

  const { data: filmsDetails, isLoading: isFilmsLoading } = useHttpRequest<
    true,
    { title: string }
  >(person?.films);

  const { data: shipsDetails, isLoading: isShipsLoading } = useHttpRequest<
    true,
    { name: string }
  >(person?.starships);

  const films = useMemo(
    () => filmsDetails?.map((film) => film.title),
    [filmsDetails]
  );

  const ships = useMemo(
    () => shipsDetails?.map((ship) => ship.name),
    [shipsDetails]
  );

  return (
    <Stack direction="column" gap={20}>
      <div>
        <Button startIcon={CaretLeft} onClick={onClose}>
          Back
        </Button>
      </div>

      <PersonDetailsCard
        name={person?.name}
        gender={person?.gender}
        hairColour={person?.hair_color}
        eyeColour={person?.eye_color}
        planet={planetDetails?.name}
        films={films}
        starships={ships}
        isLoading={isPlanetLoading || isFilmsLoading || isShipsLoading}
      />
    </Stack>
  );
};
