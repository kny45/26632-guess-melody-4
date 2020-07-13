import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player.jsx";

describe(`Render AudioPlayer`, () => {
  it(`AudioPlayer is rendered correctly with play`, () => {
    const tree = renderer.create(
        <AudioPlayer
          isPlaying = {true}
          isLoading = {true}
          onPlayButtonClick = {() => {}}
        >
          <audio />
        </AudioPlayer>, {
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
          isLoading = {true}
          onPlayButtonClick = {() => {}}
        >
          <audio />
        </AudioPlayer>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
