import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const questions = [];

describe(`Render App`, () => {
  it(`Should App render correctly`, () => {
    const errorCount = 3;

    const tree = renderer
      .create(
          <App
            errorCount = {errorCount}
            questions = {questions}
          />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
