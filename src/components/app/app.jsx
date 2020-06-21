import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errorCount} = props;

  const welcomeButtonClickHandler = () => {};

  return (
    <WelcomeScreen
      errorCount = {errorCount}
      onWelcomeButtonClick = {welcomeButtonClickHandler}
    />
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
