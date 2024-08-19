import { useTheme } from "@emotion/react";
import { PersonCardProps } from "../PersonCard";
import { css } from "@emotion/css";
import { Stack } from "../../layout/Stack";
import { Typography } from "../Typography";
import { santiseAPIText } from "../../../utils";
import { Shimmer } from "../Shimmer";

type PersonDetailsCardProps = Pick<
  PersonCardProps,
  "name" | "gender" | "planet"
> & {
  hairColour?: string;
  eyeColour?: string;
  films?: string[];
  starships?: string[];
  isLoading?: boolean;
};

export const PersonDetailsCard: React.FC<PersonDetailsCardProps> = ({
  name,
  gender,
  planet,
  hairColour,
  eyeColour,
  films,
  starships,
  isLoading,
}) => {
  const theme = useTheme();

  /** Card styles */
  const container = css`
    border: 1px solid ${theme.color.border.card};
    padding: 20px 16px;
    border-radius: 4px;
  `;

  return (
    <div className={container}>
      <Stack direction="column" gap={20}>
        <Typography variant="h1">{name}</Typography>
        <Stack direction="column" gap={18}>
          <Typography
            variant="body2"
            color="secondary"
            label="Gender"
            capitalise
          >
            {santiseAPIText(gender)}
          </Typography>

          <Typography
            variant="body1"
            color="secondary"
            label="Planet"
            capitalise
          >
            {isLoading ? (
              <Shimmer width={100} height={12} color="secondary" />
            ) : (
              planet
            )}
          </Typography>

          <Typography
            variant="body2"
            color="secondary"
            label="Hair colour"
            capitalise
          >
            {hairColour}
          </Typography>

          <Typography
            variant="body2"
            color="secondary"
            label="Eye colour"
            capitalise
          >
            {santiseAPIText(eyeColour)}
          </Typography>

          <Typography
            variant="body2"
            color="secondary"
            label="Films"
            capitalise
          >
            {isLoading ? (
              <Shimmer width={200} height={12} color="secondary" />
            ) : (
              films?.join(", ")
            )}
          </Typography>

          <Typography
            variant="body2"
            color="secondary"
            label="Starships piloted"
            capitalise
          >
            {isLoading ? (
              <Shimmer width={200} height={12} color="secondary" />
            ) : starships?.length ? (
              starships?.join(", ")
            ) : (
              "None"
            )}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
