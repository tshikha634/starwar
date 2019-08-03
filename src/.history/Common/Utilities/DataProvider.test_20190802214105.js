import DataProvider from './DataProvider'
import React from 'react'
import {mount} from 'enzyme'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
  it("should fail if positive value is not given", () => {
  });
  it("should check url", () => {
    let _baseUrl = "https://swapi.co/api";
    let url = "people";
    let furl = `${_baseUrl}/${url}`;
  let dataProvider = new DataProvider();
  expect(dataProvider.manageUrl("people","people",true)).toEqual(furl);
  });
  