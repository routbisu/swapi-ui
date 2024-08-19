import { renderHook, act } from "@testing-library/react-hooks";
import { vi } from "vitest";
import { useHttpRequest } from "../hooks/useHttpRequest";

describe("useHttpRequest", () => {
  beforeEach(() => {
    // Clear mocks before each test
    vi.clearAllMocks();
  });

  it("should initialize with loading true and data undefined", () => {
    const { result } = renderHook(() =>
      useHttpRequest("https://api.example.com/data")
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();
  });

  it("should fetch data successfully", async () => {
    const mockData = { id: 1, name: "Test Data" };

    // Mock the fetch function
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      } as Response)
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useHttpRequest("https://api.example.com/data")
    );

    await waitForNextUpdate(); // Wait for useEffect to fetch the data

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeUndefined();
  });

  it("should handle fetch errors", async () => {
    const mockError = "Failed to fetch";

    // Mock the fetch function to throw an error
    global.fetch = vi.fn(() => Promise.reject(mockError));

    const { result, waitForNextUpdate } = renderHook(() =>
      useHttpRequest("https://api.example.com/data")
    );

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBe(mockError);
  });

  it("should update data when fetchData is called manually", async () => {
    const mockData = { id: 1, name: "Updated Test Data" };

    // Mock the fetch function
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      } as Response)
    );

    const { result, waitForNextUpdate } = renderHook(() => useHttpRequest());

    act(() => {
      result.current.fetchData("https://api.example.com/updated-data");
    });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeUndefined();
  });
});
