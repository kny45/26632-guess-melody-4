import React from "react";
import renderer from "react-test-renderer";

import Mistakes from "./mistakes.jsx";

describe(`Render Mistakes`, () => {
  it(`Render without mistakes`, ()=> {
    const tree = renderer
      .create(
          <Mistakes
            count = {0}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render with 1 mistakes`, ()=> {
    const tree = renderer
      .create(
          <Mistakes
            count = {1}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
