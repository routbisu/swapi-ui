import React from "react";
import { Stack } from "../../layout/Stack";
import { WifiX } from "@phosphor-icons/react";
import { useTheme } from "@emotion/react";
import { Typography } from "../Typography";

type ErrorCardProps = {
  heading?: string;
  subtitle?: string;
};

export const ErrorCard: React.FC<ErrorCardProps> = ({
  heading = "Network error",
  subtitle = "There was an error trying to connect to the Star Wars universe. Please try again later.",
}) => {
  const theme = useTheme();

  return (
    <Stack direction="column" align="center" gap={20}>
      <WifiX size={64} color={theme.color.text.primary} />

      <Stack direction="column" align="center" gap={10}>
        <Typography variant="h2">{heading}</Typography>
        {subtitle ? (
          <Typography variant="body2" color="secondary" align="center">
            {subtitle}
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
};
