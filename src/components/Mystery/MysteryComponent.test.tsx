import React from "react";
import { render, screen } from "@testing-library/react";
import MysteryComponent from "./MysteryComponent";

test("renders MysteryComponent", () => {
  const { getByRole } = render(<MysteryComponent />);
  const button = getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Mystery button click event fires", () => {
  const mockOnClick = jest.fn();
  const { getByRole } = render(<MysteryComponent onClick={mockOnClick} />);
  const button = getByRole("button");
  button.click();
  expect(mockOnClick.mock.calls.length).toEqual(1);
});
