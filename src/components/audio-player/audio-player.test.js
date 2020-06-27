import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player.jsx";

describe(`Render AudioPlayer`, () => {
  const mock = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

  it(`AudioPlayer is rendered correctly with play`, () => {
    const tree = renderer.create(
        <AudioPlayer
          isPlaying = {true}
          src = {mock}
          onPlayButtonClick = {() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AudioPlayer is rendered correctly with pause`, () => {
    const tree = renderer.create(
        <AudioPlayer
          isPlaying = {false}
          src = {mock}
          onPlayButtonClick = {() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
