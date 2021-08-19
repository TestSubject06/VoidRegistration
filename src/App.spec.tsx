import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("Application Main Container", function () {
  it("should render", function () {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Header").length).toBe(1);
    expect(wrapper.find("Container").length).toBe(1);
  });

  it("should expose three routes; one for register, privacy policy, and submit", function () {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Route").filterWhere((element) => element.prop("path") === "/register")).toHaveLength(1);
    expect(wrapper.find("Route").filterWhere((element) => element.prop("path") === "/privacy")).toHaveLength(1);
    expect(wrapper.find("Route").filterWhere((element) => element.prop("path") === "/submit")).toHaveLength(1);
  });

  it("should redirect unknown URLs to the register page", function () {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Redirect").prop("to")).toEqual("register");
  });
});
