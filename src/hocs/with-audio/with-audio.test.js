import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import withAudio from "./with-audio.jsx";

describe(`Render withAudio`, () => {

  const MockComponent = (props) => {
    const {children} = props;

    return (
      <div>
        {children}
      </div>
    );
  };

  MockComponent.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ])
  };

  const MockComponentWrapped = withAudio(MockComponent);

  it(`withAudio is reb=ndered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        isPlaying = {false}
        onPlayButtonClick = {() => {}}
        src = {``}
      />), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
