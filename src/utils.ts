import { FAVOURITES_LOCAL_STORAGE_KEY } from "./constants";
import { FavouritePerson } from "./types";

/**
 * Change text returned from API into human readable text
 * @param text input text
 * @returns human readable text
 */
export const santiseAPIText = (text?: string): string | undefined => {
  if (!text) return text;

  if (text?.toLowerCase() === "n/a") return "Not available";

  return text;
};

/**
 * Save new favourite character to localstorage
 * @param character FavouritePerson
 */
export const saveFavourite = (character: FavouritePerson) => {
  if (localStorage) {
    // Get existing items from storage
    const favourites = localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY);
    if (favourites) {
      const parsedFavourites = JSON.parse(favourites);
      if (Array.isArray(parsedFavourites)) {
        parsedFavourites.push(character);
        localStorage.setItem(
          FAVOURITES_LOCAL_STORAGE_KEY,
          JSON.stringify(parsedFavourites)
        );
      }
    } else {
      // When no favourites are saved
      localStorage.setItem(
        FAVOURITES_LOCAL_STORAGE_KEY,
        JSON.stringify([character])
      );
    }
  }
};

/**
 * Remove a favourite character from localstorage
 * @param character FavouritePerson
 */
export const removeFavourite = (personUrl: string) => {
  if (localStorage) {
    // Get existing items from storage
    const favourites = localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY);
    if (favourites) {
      const parsedFavourites = JSON.parse(favourites);

      if (Array.isArray(parsedFavourites)) {
        const newFavouritesList = parsedFavourites.filter(
          (person) => person.url !== personUrl
        );

        localStorage.setItem(
          FAVOURITES_LOCAL_STORAGE_KEY,
          JSON.stringify(newFavouritesList)
        );
      }
    }
  }
};

/**
 * Edit gender and height for a favourite character saved in localstorage
 * @param character person with edited details
 */
export const editFavourite = (editedPerson: FavouritePerson) => {
  if (localStorage) {
    // Get existing items from storage
    const favourites = localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY);
    if (favourites) {
      const parsedFavourites = JSON.parse(favourites);

      if (Array.isArray(parsedFavourites)) {
        const personIdx = parsedFavourites.findIndex(
          (person) => person.url === editedPerson.url
        );

        /** Replace person with the new person details */
        const newFavouritesList = [...parsedFavourites];
        newFavouritesList[personIdx] = editedPerson;

        localStorage.setItem(
          FAVOURITES_LOCAL_STORAGE_KEY,
          JSON.stringify(newFavouritesList)
        );
      }
    }
  }
};

/**
 * Fetch all favourite characters from localstorage
 */
export const fetchFavourites = (): FavouritePerson[] => {
  if (localStorage) {
    // Get existing items from storage
    const favourites = localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY);
    if (favourites) {
      return JSON.parse(favourites) as FavouritePerson[];
    }
  }

  return [];
};

export const isPersonAddedToFavourite = (personUrl?: string) => {
  if (localStorage) {
    // Get existing items from storage
    const favourites = localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY);
    if (favourites) {
      const allFavouritePeople = JSON.parse(favourites) as FavouritePerson[];

      return allFavouritePeople?.some((people) => people.url === personUrl);
    }
  }

  return false;
};
