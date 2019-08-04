import React from "react";
import { shallow } from "enzyme/build";
import App from "./App";
import Login from "./Login";
import { mount } from "enzyme";

it("mounts without crashing", () => {
  const wrapper = shallow(<App />);
  wrapper.unmount();
});