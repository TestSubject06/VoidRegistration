import { shallow } from "enzyme";
import RegistrationFormContainer from "./registrationForm";

describe("Registration Form Container", function () {
  it("should render", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    expect(wrapper.find("ThinCard")).toHaveLength(1);
  });

  it("should render a link to my github", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    // The exact content isn't a big deal, just that we're definitely going to my page
    expect(wrapper.find("a").prop("href")).toEqual(expect.stringContaining("github.com/testsubject06"));
  });

  it("should render a link to the privacy policy page", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    expect(wrapper.find("Link[to='/privacy']")).toHaveLength(1);
  });

  it("should start with the submit button disabled", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    expect(wrapper.find("Link[to='/submit']").find("Button").prop("disabled")).toBe(true);
  });

  // Normally these would be hoisted into a separate validation suite, but given the
  // nature of the assignment I didn't want to go THAT far out.
  it("should validate too short username", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    (wrapper.find("#username").prop("onChange") as any)("a");

    expect(wrapper.find("#username").prop("validationMessage")).toEqual(expect.stringContaining("3 character"));
  });

  it("should validate too long username", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    (wrapper.find("#username").prop("onChange") as any)("12345678901234567");

    expect(wrapper.find("#username").prop("validationMessage")).toEqual(expect.stringContaining("16 character"));
  });

  it("should validate non-matching passwords", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    (wrapper.find("#password1").prop("onChange") as any)("abcdef");
    (wrapper.find("#password2").prop("onChange") as any)("abcde");

    expect(wrapper.find("#password2").prop("validationMessage")).toEqual(expect.stringContaining("match"));
  });

  it("should allow submission once all fields are filled out", function () {
    const wrapper = shallow(<RegistrationFormContainer />);

    (wrapper.find("#username").prop("onChange") as any)("abcdef");
    (wrapper.find("#password1").prop("onChange") as any)("abcdef");
    (wrapper.find("#password2").prop("onChange") as any)("abcdef");

    expect(wrapper.find("Button").prop("disabled")).toBe(false);
  });
});
