/** Represents the type of the person api response object for a person */
export type PersonAPIObject = {
  name?: string;
  gender?: string;
  homeworld?: string;
  hair_color?: string;
  eye_color?: string;
  films?: string[];
  starships?: string[];
};

export type PersonAPIResponse = {
  count?: number;
  next?: string;
  previous?: string;
  results?: PersonAPIObject[];
};
