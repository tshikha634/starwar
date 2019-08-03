import {DataProvider} from './DataProvider'
import React from 'react'
import {mount} from 'enzyme'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("DataProvider", () => {
  it("should fail if positive value is not given", () => {
  });
  it("should check url", async () => {
    let _baseUrl = "https://swapi.co/api";
    let url = "people";
    let furl = `${_baseUrl}/${url}`;
    //FirstName Change Event

    const wrapper = mount(DataProvider )
    // const childWrapper = wrapper.find();
    wrapper.instance().manageUrl(furl);
  });
  it("calls fetch with the correct data when adding a new grocery", () => {});

  it("resets the state after adding a new grocery", () => {});

  it("calls the updateGroceryList callback after adding a new grocery", () => {});

  it("sets the error in state if the fetch fails", () => {});
});