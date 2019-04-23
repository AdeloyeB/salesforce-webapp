import React from "react";
import { shallow } from "enzyme";
import TrainingForm from "./components/pages/TrainingForms/TrainingForm";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/Layout/NavBar/NavBar";
import SignInWidget from "./components/auth/SignInWidget";
//import Login from "./components/auth/Login";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("TrainingForm", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TrainingForm debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("ContactForm", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ContactForm debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("NavBar", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NavBar debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("Login", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Login debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("SignInWidget", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SignInWidget debug />);

    expect(component).toMatchSnapshot();
  });
});

describe("N", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NavBar debug />);

    expect(component).toMatchSnapshot();
  });
});
