import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { image } from "../data/data";
import About from "../components/About";

test("renders a <div> with the ID of 'about'", () => {
  render(<About />);

  expect(screen.getByTestId("about")).toBeInTheDocument();
});

test("the <div> has three child elements", () => {
  render(<About />);

  const h2 = screen.getByRole("heading", { level: 2 });
  const p = screen.getByText("I love building things with React and creating awesome user experiences!");
  const img = screen.getByAltText("I made this");

  expect(h2).toBeInTheDocument();
  expect(p).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});

test("renders a <h2> with the text 'About Me'", () => {
  render(<About />);

  // find an element with the text content "About Me"
  const h2 = screen.getByRole("heading", { level: 2 });

  expect(h2).toBeInTheDocument();
});

test("renders a <p> element", () => {
  render(<About />);

  const p = screen.getByText("I love building things with React and creating awesome user experiences!");
  expect(p).toBeInTheDocument();
});

test("renders a <img> element with the correct attributes", () => {
  render(<About />);

  // Find an element with the "alt" attribute set to "I made this"
  const img = screen.getByAltText("I made this");

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", image);
});
