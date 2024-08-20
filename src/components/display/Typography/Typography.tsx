import { css } from "@emotion/css";
import { CSSObject, useTheme } from "@emotion/react";
import React, { CSSProperties, ReactNode } from "react";
import { Stack } from "../../layout/Stack";

type TypographyProps = {
  variant: "h1" | "h2" | "body1" | "body2";
  color?: "primary" | "secondary";
  /** Capitalise the first letter of the string */
  capitalise?: boolean;
  children?: ReactNode;
  label?: string;
  align?: CSSProperties["textAlign"];
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  capitalise,
  children,
  label,
  align,
}) => {
  const theme = useTheme();

  const commonStyles: CSSObject = {
    color: theme.color.text?.[color || "primary"],
    textAlign: align,
  };

  const capitalisedChildren =
    typeof children === "string" && capitalise
      ? children?.charAt(0)?.toUpperCase() + children?.slice(1)
      : children;

  if (variant === "h1") {
    return (
      <h1
        className={css`
          ${theme.typography.heading1}
          ${commonStyles}
        `}
      >
        {capitalisedChildren}
      </h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2
        className={css`
          ${theme.typography.heading2}
          ${commonStyles}
        `}
      >
        {capitalisedChildren}
      </h2>
    );
  }

  return (
    <Stack direction="column" gap={8}>
      {label ? (
        <p
          className={css`
            ${theme.typography.label}
            color: ${theme.color.text.primary};
            opacity: 0.8;
          `}
        >
          {label}
        </p>
      ) : null}

      <p
        className={css`
          ${theme.typography?.[variant]}
          ${commonStyles}
        `}
      >
        {capitalisedChildren}
      </p>
    </Stack>
  );
};
