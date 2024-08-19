import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React from "react";
import { Typography } from "../Typography";
import { Stack } from "../../layout/Stack";
import {
  GenderFemale,
  GenderMale,
  Icon as PhosphorIcon,
  Planet,
} from "@phosphor-icons/react";
import { PersonAPIObject } from "../../../types";
import { Shimmer } from "../Shimmer";

export type PersonCardProps = Pick<PersonAPIObject, "name" | "gender"> & {
  planet?: string;
  disableHover?: boolean;
  isLoading?: boolean;
  isPlanetLoading?: boolean;
};

export const PersonCard: React.FC<PersonCardProps> = ({
  name,
  gender,
  planet,
  disableHover,
  isLoading,
  isPlanetLoading,
}) => {
  const theme = useTheme();

  /** Styles */
  const container = css`
    border: 1px solid ${theme.color.border.card};
    padding: 16px;
    border-radius: 4px;

    &: hover {
      transition: 0.3s;
      ${!disableHover && {
        background: "#303030",
        cursor: "pointer",
      }}
    }
  `;

  let GenderIcon: PhosphorIcon | undefined = undefined;
  if (gender?.toLowerCase() === "male") GenderIcon = GenderMale;
  else if (gender?.toLowerCase() === "female") GenderIcon = GenderFemale;

  const genderIconColor = `${theme.color.text.primary}66`;

  return (
    <div className={container}>
      <Stack direction="row" align="center" justify="space-between">
        <Stack direction="column" gap={12}>
          {isLoading ? (
            <Shimmer width={200} />
          ) : (
            <Typography variant="h2">{name}</Typography>
          )}

          <Stack direction="column" gap={8}>
            <Stack gap={8} align="center">
              <Planet size={16} weight="fill" />
              {isLoading || isPlanetLoading ? (
                <Shimmer width={100} height={12} color="secondary" />
              ) : (
                <Typography variant="body2" color="secondary">
                  {planet}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>

        {GenderIcon ? (
          <GenderIcon size={32} weight="duotone" color={genderIconColor} />
        ) : isLoading ? (
          <Shimmer height={25} width={25} />
        ) : null}
      </Stack>
    </div>
  );
};
