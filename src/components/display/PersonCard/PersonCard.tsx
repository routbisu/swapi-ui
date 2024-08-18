import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React from "react";

export type PersonCardProps = {
  name: string;
  gender: string;
  planet: string;
};

export const PersonCard: React.FC<PersonCardProps> = ({
  name,
  gender,
  planet,
}) => {
  const theme = useTheme();
  /** Styles */
  const container = css`
    border: 1px solid ${theme.border.card};
  `;

  return (
    <div className={container}>
      {name} {gender} {planet}
    </div>
  );
};
