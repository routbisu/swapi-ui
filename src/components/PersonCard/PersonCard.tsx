import React from "react";

export type PersonCardProps = {
  name: string;
  gender: string;
  planet: string;
};

export const Card: React.FC<PersonCardProps> = ({ name, gender, planet }) => {
  return (
    <div>
      {name} {gender} {planet}
    </div>
  );
};
