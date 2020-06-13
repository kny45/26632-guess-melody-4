import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

describe(`Render WelcomeScreen`, () => {
  it(`Should WelcomeScreen render correctly`, () => {
    const errorCount = 3;

    const tree = renderer
      .create(
          <WelcomeScreen
            errorCount = {errorCount}
            onWelcomeButtonClick = {() => {}}
          />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
