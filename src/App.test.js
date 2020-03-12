import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders the App header(concise)", () => {
  const { getByText } = render(<App />);
  getByText(/contact form/i);
  
});

