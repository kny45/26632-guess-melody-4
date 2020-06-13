import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`E2E WelcomeScreen tests`, () => {
  it(`Should welcomeButton be presed`, () => {
    const errorCount = 3;
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errorCount = {errorCount}
          onWelcomeButtonClick = {onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
