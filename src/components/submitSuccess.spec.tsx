import { shallow } from "enzyme";
import SubmitSuccess from "./submitSuccess";

describe("Submit Success Page", function () {
  it("should render", function () {
    const wrapper = shallow(<SubmitSuccess />);

    expect(wrapper.find("Card")).toHaveLength(1);
  });

  it("should render a link to my github", function () {
    const wrapper = shallow(<SubmitSuccess />);

    // The exact content isn't a big deal, just that we're definitely going to my page
    expect(wrapper.find("a").prop("href")).toEqual(expect.stringContaining("github.com/testsubject06"));
  });

  it("should render a link back to the registration page", function () {
    // Which, under normal circumstances would be ridiculous, but this is a test app
    // so having a way back to the main page is useful.
    const wrapper = shallow(<SubmitSuccess />);

    expect(wrapper.find("Link").prop("to")).toEqual(expect.stringContaining("register"));
  });
});
