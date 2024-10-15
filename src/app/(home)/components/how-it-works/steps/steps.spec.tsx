import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Steps } from ".";

describe("<Steps/>", () => {
  it("should be able to render the component", () => {
    render(<Steps />);

    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(3);
  });
});