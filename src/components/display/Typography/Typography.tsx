import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { ReactNode } from "react";

type TypographyProps = {
  variant: "h1" | "h2" | "body1" | "body2";
  color?: "primary" | "secondary";
  children?: ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  children,
}) => {
  const theme = useTheme();

  const colorStyles = { color: theme.color.text?.[color || "primary"] };

  if (variant === "h1") {
    return (
      <h1
        className={css`
          ${theme.typography.heading1}
          ${colorStyles}
        `}
      >
        {children}
      </h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2
        className={css`
          ${theme.typography.heading2}
          ${colorStyles}
        `}
      >
        {children}
      </h2>
    );
  }

  return (
    <p
      className={css`
        ${theme.typography?.[variant]}
        ${colorStyles}
      `}
    >
      {children}
    </p>
  );
};
