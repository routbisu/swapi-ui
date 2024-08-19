import { CaretLeft, Heart } from "@phosphor-icons/react";
import { PersonDetailsCard } from "../components/display/PersonDetailsCard";
import { Button } from "../components/inputs/Button";
import { Stack } from "../components/layout/Stack";
import { PersonAPIObject } from "../types";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { useEffect, useMemo, useState } from "react";
import {
  isPersonAddedToFavourite,
  removeFavourite,
  saveFavourite,
} from "../utils";
import { Typography } from "../components/display/Typography";
import { css } from "@emotion/css";

type PersonDetailsProps = {
  person: PersonAPIObject;
  /** Close this view and go back to lists page */
  onClose: () => void;
};

export const PersonDetails: React.FC<PersonDetailsProps> = ({
  person,
  onClose,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
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

  /** Check if the person is already added to favourite */
  const fetchFavouriteStatus = () => {
    setIsFavourite(isPersonAddedToFavourite(person?.url));
  };

  const handleAddToFavourite = () => {
    saveFavourite({
      name: person?.name,
      gender: person?.gender,
      height: person?.height,
      planet: planetDetails?.name,
      url: person?.url,
    });

    setIsFavourite(true);
  };

  const handleRemoveFavourite = () => {
    if (person?.url) {
      removeFavourite(person.url);
      setIsFavourite(false);
    }
  };

  useEffect(() => {
    fetchFavouriteStatus();
  }, [person?.url]);

  const favouriteButtonStyle = css`
    & p {
      opacity: 0;
    }

    &:hover {
      & p {
        opacity: 0.5;
        transition: opacity 0.3s;
      }
    }
  `;

  return (
    <Stack direction="column" gap={20}>
      <Stack align="center" justify="space-between">
        <Button startIcon={CaretLeft} onClick={onClose}>
          Back
        </Button>
        <div className={favouriteButtonStyle}>
          <Stack align="center" gap={12}>
            <Typography variant="body2" color="secondary">
              {isFavourite ? "Remove from" : "Add to"} favourites
            </Typography>
            <Button
              startIcon={Heart}
              startIconProps={{ weight: isFavourite ? "fill" : "regular" }}
              onClick={
                isFavourite ? handleRemoveFavourite : handleAddToFavourite
              }
            />
          </Stack>
        </div>
      </Stack>

      <PersonDetailsCard
        name={person?.name}
        gender={person?.gender}
        height={person?.height}
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
