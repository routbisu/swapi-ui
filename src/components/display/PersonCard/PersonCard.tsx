import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React from "react";
import { Typography } from "../Typography";
import { Stack } from "../../layout/Stack";
import {
  ArrowLineUp,
  GenderFemale,
  GenderMale,
  PencilSimple,
  Icon as PhosphorIcon,
  Planet,
  Trash,
} from "@phosphor-icons/react";
import { PersonAPIObject } from "../../../types";
import { Shimmer } from "../Shimmer";
import { Button } from "../../inputs/Button";

export type PersonCardProps = Pick<
  PersonAPIObject,
  "name" | "gender" | "height"
> & {
  planet?: string;
  disableHover?: boolean;
  isLoading?: boolean;
  isPlanetLoading?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};

export const PersonCard: React.FC<PersonCardProps> = ({
  name,
  gender,
  height,
  planet,
  disableHover,
  isLoading,
  isPlanetLoading,
  onClick,
  onDelete,
  onEdit,
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
    <div className={container} onClick={() => onClick && onClick()}>
      <Stack direction="row" align="center" justify="space-between">
        <Stack direction="row" gap={16}>
          <Stack direction="row" gap={12}>
            {onDelete ? <Button startIcon={Trash} onClick={onDelete} /> : null}
            {onEdit ? (
              <Button startIcon={PencilSimple} onClick={onEdit} />
            ) : null}
          </Stack>
          <Stack direction="column" gap={12}>
            {isLoading ? (
              <Shimmer width={200} dataTestId="name-loader" />
            ) : (
              <Typography variant="h2">{name}</Typography>
            )}

            <Stack gap={8}>
              <Stack gap={8} align="center">
                <Planet size={16} weight="fill" />
                {isLoading || isPlanetLoading ? (
                  <Shimmer width={100} height={12} color="secondary" />
                ) : (
                  <Typography variant="body2" color="secondary" capitalise>
                    {planet}
                  </Typography>
                )}
              </Stack>

              {height ? (
                <Stack gap={8} align="center">
                  <ArrowLineUp size={16} weight="fill" />
                  <Typography variant="body2" color="secondary">
                    {height} {height && "cm"}
                  </Typography>
                </Stack>
              ) : null}
            </Stack>
          </Stack>
        </Stack>

        {GenderIcon ? (
          <GenderIcon
            size={32}
            weight="duotone"
            color={genderIconColor}
            data-testid="gender-icon"
          />
        ) : isLoading ? (
          <Shimmer height={25} width={25} />
        ) : null}
      </Stack>
    </div>
  );
};
