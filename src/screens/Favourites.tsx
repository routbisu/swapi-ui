import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "../components/inputs/Button";
import { Stack } from "../components/layout/Stack";
import { useEffect, useState } from "react";
import { FavouritePerson } from "../types";
import { fetchFavourites, removeFavourite } from "../utils";
import { Grid } from "../components/layout/Grid";
import { PersonCard } from "../components/display/PersonCard";
import { Typography } from "../components/display/Typography";
import { DarthVaderGraphic } from "../components/media/DarthVaderGraphic";

type FavouritesProps = { onClose: () => void };

export const Favourites: React.FC<FavouritesProps> = ({ onClose }) => {
  const [favourites, setFavourites] = useState<FavouritePerson[]>();

  const getFavourites = () => {
    setFavourites(fetchFavourites());
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const handleRemoveFavourite = (personUrl?: string) => {
    if (personUrl) {
      removeFavourite(personUrl);
      getFavourites();
    }
  };

  const noDataView = (
    <div style={{ padding: 50 }}>
      <Stack direction="column" align="center" gap={20}>
        <DarthVaderGraphic />
        <Stack direction="column" align="center" gap={10}>
          <Typography variant="h2">No favourites added</Typography>
          <Typography variant="body2" color="secondary">
            To add a character to your favourite list, go to their details page
          </Typography>
        </Stack>
      </Stack>
    </div>
  );

  return (
    <Stack direction="column" gap={20}>
      <Stack align="center" justify="space-between">
        <Typography variant="h1">Favourites</Typography>
        <Button startIcon={CaretLeft} onClick={onClose}>
          Back
        </Button>
      </Stack>

      {favourites?.length ? (
        <Grid columnsMobile={1} columnsDesktop={2} gap={20}>
          {favourites.map((person, idx) => (
            <PersonCard
              key={idx}
              name={person?.name}
              gender={person?.gender}
              height={person?.height}
              planet={person?.planet}
              disableHover
              onDelete={() => handleRemoveFavourite(person?.url)}
            />
          ))}
        </Grid>
      ) : (
        noDataView
      )}
    </Stack>
  );
};
