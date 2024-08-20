import { CaretLeft, FloppyDisk } from "@phosphor-icons/react";
import { Button } from "../components/inputs/Button";
import { Stack } from "../components/layout/Stack";
import { useEffect, useState } from "react";
import { FavouritePerson } from "../types";
import { editFavourite, fetchFavourites, removeFavourite } from "../utils";
import { Grid } from "../components/layout/Grid";
import { PersonCard } from "../components/display/PersonCard";
import { Typography } from "../components/display/Typography";
import { DarthVaderGraphic } from "../components/media/DarthVaderGraphic";
import { Modal } from "../components/display/Modal";
import { Textfield } from "../components/inputs/Textfield";
import { css } from "@emotion/css";

type FavouriteEditorProps = {
  person?: FavouritePerson;
  onClose: () => void;
  onSubmit: () => void;
};

const FavouriteEditor: React.FC<FavouriteEditorProps> = ({
  person,
  onClose,
  onSubmit,
}) => {
  const [gender, setGender] = useState<string | undefined>(person?.gender);
  const [height, setHeight] = useState<string | undefined>(person?.height);

  const handleSubmit = () => {
    const newPerson = { ...person, gender, height };
    editFavourite(newPerson);

    onSubmit();
  };

  return (
    <Modal
      heading={`Edit ${person?.name}`}
      onClose={onClose}
      submitButtonProps={{
        children: "Save",
        startIcon: FloppyDisk,
        onClick: handleSubmit,
      }}
    >
      <div
        className={css`
          padding: 8px;
        `}
      >
        <Stack direction="column" gap={12}>
          <Typography variant="body2" label="Name" color="secondary">
            {person?.name}
          </Typography>
          <Textfield
            fullWidth
            label="Gender"
            defaultValue={gender}
            onChange={setGender}
          />
          <Textfield
            fullWidth
            label="Height"
            defaultValue={height}
            onChange={setHeight}
          />
        </Stack>
      </div>
    </Modal>
  );
};

type FavouritesProps = { onClose: () => void };

export const Favourites: React.FC<FavouritesProps> = ({ onClose }) => {
  const [editCharacter, setEditCharacter] = useState<
    FavouritePerson | undefined
  >();
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
          <Typography variant="body2" color="secondary" align="center">
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
              onEdit={() => setEditCharacter(person)}
            />
          ))}
        </Grid>
      ) : (
        noDataView
      )}

      {editCharacter ? (
        <FavouriteEditor
          person={editCharacter}
          onClose={() => setEditCharacter(undefined)}
          /** Refresh favourites list after editing */
          onSubmit={() => {
            setEditCharacter(undefined);
            getFavourites();
          }}
        />
      ) : null}
    </Stack>
  );
};
