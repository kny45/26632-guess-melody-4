import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen.jsx";
import {GameType} from "../../const.js";

describe(`Render GameScreen`, () => {
  const children = <div className="children-mock-component" />;

  it(`GameScreen is rendered correctly with GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          type = {GameType.ARTIST}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GameScreen is rendered correctly with GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          type = {GameType.GENRE}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
