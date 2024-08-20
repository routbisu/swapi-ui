import { PersonCardProps } from "./components/display/PersonCard";

/** Represents the type of the person api response object for a person */
export type PersonAPIObject = {
  name?: string;
  gender?: string;
  homeworld?: string;
  hair_color?: string;
  height?: string;
  eye_color?: string;
  films?: string[];
  starships?: string[];
  url?: string;
};

export type PersonAPIResponse = {
  count?: number;
  next?: string;
  previous?: string;
  results?: PersonAPIObject[];
};

export type FavouritePerson = Pick<
  PersonCardProps,
  "name" | "gender" | "height" | "planet"
> & { url?: PersonAPIObject["url"] };
