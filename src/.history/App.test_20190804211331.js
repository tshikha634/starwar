import React from "react";
import import Adapter from 'enzyme-adapter-react-16';
App from "./App";
import { mount } from "enzyme";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("mounts without crashing", () => {
  const wrapper = mount(<App />);
  wrapper.unmount();
});