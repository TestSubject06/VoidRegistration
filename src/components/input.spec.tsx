import { shallow } from "enzyme";
import { ComponentProps } from "react";
import Input from "./input";

describe("Generic Input Component", function () {
  function setupWrapper(additionalProps?: Partial<ComponentProps<typeof Input>>) {
    const changeHandler = jest.fn();
    const wrapper = shallow(<Input id="foo" label="bar" placeholder="baz" onChange={changeHandler} value="" {...additionalProps} />);

    return {
      wrapper,
      changeHandler,
    };
  }

  it("should render", function () {
    const { wrapper } = setupWrapper();

    expect(wrapper.find("Label")).toHaveLength(1);
  });

  it("should attach whatever value is passed in as a controlled input component", function () {
    const { wrapper } = setupWrapper({ value: "buzz" });

    expect(wrapper.find("InputElement").prop("value")).toEqual("buzz");
  });

  it("should display as a text type field if no type is passed in", function () {
    const { wrapper } = setupWrapper();

    expect(wrapper.find("InputElement").prop("type")).toEqual("text");
  });

  it("should display as any passed in type, like password", function () {
    const { wrapper } = setupWrapper({ type: "password" });

    expect(wrapper.find("InputElement").prop("type")).toEqual("password");
  });

  it("should display a validation error if validationMessage is supplied", function () {
    const { wrapper } = setupWrapper({ validationMessage: "buzzard" });

    expect(wrapper.find("ValidationMessage").text()).toEqual("buzzard");
  });

  it("should not display a ValidationMessage otherwise", function () {
    const { wrapper } = setupWrapper();

    expect(wrapper.find("ValidationMessage")).toHaveLength(0);
  });

  it("should signal changes when the input is modified", function () {
    const { wrapper, changeHandler } = setupWrapper();

    // Simulate a React.ChangeEvent<HtmlInputElement> with a value
    // The hoops required for TypeScript to be cool with this are insane, so we skip all that for tests.
    (wrapper.find("InputElement").prop("onChange") as any)({ target: { value: "bar" } });

    expect(changeHandler).toHaveBeenCalledWith("bar");
  });
});
