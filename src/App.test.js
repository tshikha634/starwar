import React from "react";
import App from "./App";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("mounts without crashing", () => {
  const wrapper = mount(<App />);
  wrapper.unmount();
});