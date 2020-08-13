import React from "react";
import { render } from "@testing-library/react";
import { HomeView } from "./views";

test("renders homepage", () => {
  const { getByText } = render(<HomeView />);
  const linkElement = getByText(/Github Light/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders repositories", () => {
  const { getByText } = render(<HomeView />);
  const linkElement = getByText(/Back/i);
  expect(linkElement).toBeInTheDocument();
});
