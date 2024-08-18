/** Represents the type of the person api response object for a person */
export type PersonAPIObject = {
  name: string;
  gender: string;
  homeworld?: string;
};

export type PersonAPIResponse = {
  count?: number;
  next?: string;
  previous?: string;
  results?: PersonAPIObject[];
};
