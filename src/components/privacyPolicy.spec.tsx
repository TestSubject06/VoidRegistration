import { shallow } from "enzyme";
import PrivacyPolicy from "./privacyPolicy";

describe("Privacy Policy Page", function () {
  it("should render", function () {
    const wrapper = shallow(<PrivacyPolicy />);

    expect(wrapper.find("Card")).toHaveLength(1);
  });

  it("should render a link to my github", function () {
    const wrapper = shallow(<PrivacyPolicy />);

    // The exact content isn't a big deal, just that we're definitely going to my page
    expect(wrapper.find("a").prop("href")).toEqual(expect.stringContaining("github.com/testsubject06"));
  });

  it("should render a link to the registration page", function () {
    const wrapper = shallow(<PrivacyPolicy />);

    expect(wrapper.find("Link").prop("to")).toEqual(expect.stringContaining("register"));
  });
});
