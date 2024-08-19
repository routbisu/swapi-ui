import { FavouritePerson } from "../types";
import { santiseAPIText, saveFavourite } from "../utils";
import { vi } from "vitest";

describe("santiseAPIText", () => {
  it("should return undefined if input is undefined", () => {
    expect(santiseAPIText(undefined)).toBeUndefined();
  });

  it('should return "Not available" if input is "n/a"', () => {
    expect(santiseAPIText("n/a")).toBe("Not available");
  });

  it('should return "Not available" if input is "N/A" (case-insensitive)', () => {
    expect(santiseAPIText("N/A")).toBe("Not available");
  });

  it('should return the input text if it is not "n/a" or "N/A"', () => {
    expect(santiseAPIText("Some text")).toBe("Some text");
    expect(santiseAPIText("Available")).toBe("Available");
    expect(santiseAPIText("123")).toBe("123");
  });
});

const FAVOURITES_LOCAL_STORAGE_KEY = "star_wars_favourites";

describe("saveFavourite", () => {
  beforeAll(() => {
    Object.defineProperty(global, "localStorage", {
      value: {
        getItem: vi.fn(),
        setItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    });
  });

  beforeEach(() => {
    // Clear all mocks and localStorage before each test
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should save a new favourite character when there are no existing favourites", () => {
    const character: FavouritePerson = {
      name: "Character 1",
      gender: "male",
      url: "https://url1",
    };
    saveFavourite(character);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      FAVOURITES_LOCAL_STORAGE_KEY,
      JSON.stringify([character])
    );
  });
});
