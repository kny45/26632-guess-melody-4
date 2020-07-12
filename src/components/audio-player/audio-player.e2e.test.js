import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`E2E AudioPlayer tests`, () => {
  it(`When user click on PlayButton`, () => {
    const onPlayButtonClick = jest.fn();

    const audioPlayer = shallow(
        <AudioPlayer
          isPlaying = {false}
          isLoading = {true}
          onPlayButtonClick = {onPlayButtonClick}
        />
    );

    const playButton = audioPlayer.find(`button`);

    playButton.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);

    playButton.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(2);
  });
});
