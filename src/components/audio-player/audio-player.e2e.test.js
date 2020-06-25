import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`E2E AudioPlayer tests`, () => {
  const mockSrc = `path`;

  it(`When user click on PlayButton`, () => {
    const initialState = {
      progress: 0,
      isLoading: true,
      isPlaying: false,
    };
    const src = mockSrc;
    const onPlayButtonClick = jest.fn();

    const audioPlayer = shallow(
        <AudioPlayer
          isPlaying = {initialState.isPlaying}
          src = {src}
          onPlayButtonClick = {onPlayButtonClick}
        />,
        {disableLifecycleMethods: true}
    );

    expect(audioPlayer.state().isPlaying).toEqual(initialState.isPlaying);

    const playButton = audioPlayer.find(`button`);

    playButton.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
    expect(audioPlayer.state().isPlaying).toEqual(!initialState.isPlaying);

    playButton.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(2);
    expect(audioPlayer.state().isPlaying).toEqual(initialState.isPlaying);
  });
});
