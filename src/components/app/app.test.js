import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/2`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/3`,
      artist: `Jim Beam`,
    }],
  },
];

describe(`Render App`, () => {
  const errorCount = 3;

  it(`Render App with WelcomeScreen`, () => {
    const tree = renderer
      .create(
          <App
            errorCount = {errorCount}
            questions = {questions}
            onUserAnswer = {() => {}}
            onWelcomeButtonClick = {() => {}}
            step = {-1}
          />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render App with GenreQuestionScreen`, () => {
    const tree = renderer
      .create(
          <App
            errorCount = {errorCount}
            questions = {questions}
            onUserAnswer = {() => {}}
            onWelcomeButtonClick = {() => {}}
            step = {0}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render App with ArtistQuestionScreen`, () => {
    const tree = renderer
      .create(
          <App
            errorCount = {errorCount}
            questions = {questions}
            onUserAnswer = {() => {}}
            onWelcomeButtonClick = {() => {}}
            step = {1}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
