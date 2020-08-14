import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { HomeView } from "./views";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Repositories } from "./components";

test("renders homepage", () => {
  const { getByText } = render(<HomeView />);
  const linkElement = getByText(/Github Light/i);
  expect(linkElement).toBeInTheDocument();
});

test("Initiates searching", () => {
  const { getByText } = render(
    <Router>
      <Route
        path="/"
        render={(props) => <Repositories {...props} onSubmit={jest.fn} />}
      />
    </Router>
  );

  const linkElement = getByText(/Searching/i);
  expect(linkElement).toBeInTheDocument();
});

test("test if input handler handles input", () => {
  const handleChange = jest.fn();
  const { container } = render(<input type="text" onChange={handleChange} />);
  const input = container.firstChild;
  fireEvent.change(input, { target: { value: "elyasp" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("elyasp");
});

test("renders user data", async () => {
  const dummyUser = {
    name: "leevancleef",
    repositories: "32",
    premium: false,
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(dummyUser),
    })
  );

  global.fetch.mockRestore();
});
