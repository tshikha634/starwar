import React from "react";
import App from "./App";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("mounts without crashing", () => {
  const wrapper = mount(<App />);
  wrapper.unmount();
});