import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { vi } from "vitest";
import { PersonCard, PersonCardProps } from "../display/PersonCard";
import { defaultTheme } from "../../themes/default";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>);
};

describe("PersonCard", () => {
  const defaultProps: PersonCardProps = {
    name: "John Doe",
    gender: "male",
    height: "180",
    planet: "Earth",
    isLoading: false,
    isPlanetLoading: false,
    onClick: vi.fn(),
    onDelete: vi.fn(),
  };

  it("should render the person name", () => {
    renderWithTheme(<PersonCard {...defaultProps} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("should render the person gender icon", () => {
    renderWithTheme(<PersonCard {...defaultProps} />);
    expect(screen.getByTestId("gender-icon")).toBeInTheDocument();
  });

  it("should render the planet name", () => {
    renderWithTheme(<PersonCard {...defaultProps} />);
    expect(screen.getByText("Earth")).toBeInTheDocument();
  });

  it("should render the height", () => {
    renderWithTheme(<PersonCard {...defaultProps} />);
    expect(screen.getByText("180 cm")).toBeInTheDocument();
  });

  it("should handle loading state for the name", () => {
    renderWithTheme(<PersonCard isLoading={true} />);
    expect(screen.getByTestId("name-loader")).toBeInTheDocument();
  });

  it("should call onClick when card is clicked", () => {
    renderWithTheme(<PersonCard {...defaultProps} />);
    fireEvent.click(screen.getByText("John Doe"));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("should call onDelete when delete button is clicked", () => {
    renderWithTheme(<PersonCard {...defaultProps} />);
    fireEvent.click(screen.getByRole("button"));
    expect(defaultProps.onDelete).toHaveBeenCalledTimes(1);
  });

  it("should not render the delete button when onDelete is not provided", () => {
    renderWithTheme(<PersonCard {...defaultProps} onDelete={undefined} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should not apply hover styles when disableHover is true", () => {
    renderWithTheme(<PersonCard {...defaultProps} disableHover={true} />);
    const container = screen.getByText("John Doe").closest("div");
    expect(container).not.toHaveStyle("cursor: pointer");
  });
});
