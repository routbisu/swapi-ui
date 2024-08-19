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
  height?: string;
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
  height,
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

    & ul {
      li {
        line-height: 1.6;
        p {
          &:before {
            content: "•";
            padding-right: 8px;
          }
        }
      }
    }
  `;

  const listLoader = (
    <Stack direction="column" gap={16}>
      <Shimmer width={200} height={12} color="secondary" />
      <Shimmer width={160} height={12} color="secondary" />
      <Shimmer width={180} height={12} color="secondary" />
    </Stack>
  );

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

          {isLoading ? (
            <div>
              <Typography variant="body2" label="Planet" />
              <Shimmer width={100} height={12} color="secondary" />
            </div>
          ) : (
            <Typography
              variant="body1"
              color="secondary"
              label="Planet"
              capitalise
            >
              {planet}
            </Typography>
          )}

          <Typography
            variant="body2"
            color="secondary"
            label="Height"
            capitalise
          >
            {height} {height ? "cm" : ""}
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

          {isLoading ? (
            <Stack direction="column" gap={8}>
              <Typography variant="body2" label="Films" />
              {listLoader}
            </Stack>
          ) : (
            <Stack direction="column">
              <Typography variant="body2" label="Films" />
              <ul>
                {films?.map((film, idx) => (
                  <li key={idx}>
                    <Typography variant="body2" color="secondary" capitalise>
                      {film}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Stack>
          )}

          {isLoading ? (
            <Stack direction="column" gap={8}>
              <Typography variant="body2" label="Starships piloted" />
              {listLoader}
            </Stack>
          ) : (
            <Stack direction="column">
              <Typography
                variant="body2"
                color="secondary"
                label="Starships piloted"
              >
                {starships?.length ? null : "None"}
              </Typography>
              <ul>
                {starships?.map((starship, idx) => (
                  <li key={idx}>
                    <Typography variant="body2" color="secondary" capitalise>
                      {starship}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Stack>
          )}
        </Stack>
      </Stack>
    </div>
  );
};
