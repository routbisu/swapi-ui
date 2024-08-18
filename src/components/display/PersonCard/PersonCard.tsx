import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React from "react";

export type PersonCardProps = {
  name: string;
  gender: string;
  planet: string;
  disableHover?: boolean;
};

export const PersonCard: React.FC<PersonCardProps> = ({
  name,
  gender,
  planet,
  disableHover,
}) => {
  const theme = useTheme();
  /** Styles */
  const container = css`
    border: 1px solid ${theme.color.border.card};
    padding: 16px;
    border-radius: 4px;

    & > h2 {
      color: ${theme.color.text.primary};
      ${theme.typography.heading2}
    }

    &: hover {
      transition: 0.3s;
      ${!disableHover && {
        background: "#303030",
        cursor: "pointer",
      }}
    }
  `;

  return (
    <div className={container}>
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Home planet: {planet}</p>
    </div>
  );
};
