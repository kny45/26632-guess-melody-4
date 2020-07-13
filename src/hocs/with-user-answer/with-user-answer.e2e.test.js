import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`E2E withUserAnswer tests`, () => {
  const MockComponennt = () => <div />;
  const MockComponenntWrapped = withUserAnswer(MockComponennt);
  const mock = {
    question: {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
        {
          src: `path`,
          genre: `jazz`,
        },
        {
          src: `path`,
          genre: `jazz`,
        },
        {
          src: `path`,
          genre: `blues`,
        },
      ],
    },
  };

  it(`Should change answer`, () => {
    const wrapper = shallow(
        <MockComponenntWrapped
          question = {mock.question}
          onAnswer = {() => {}}
        />);

    expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

    wrapper.props().onChange(0, true);
    expect(wrapper.props().userAnswers).toEqual([true, false, false, false]);

    wrapper.props().onChange(0, false);
    expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

    wrapper.props().onChange(1, true);
    expect(wrapper.props().userAnswers).toEqual([false, true, false, false]);
  });
});
