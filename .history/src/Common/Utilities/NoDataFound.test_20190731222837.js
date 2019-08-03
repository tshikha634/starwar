import React from 'react'
import NoDataFound from './NoDataFound'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe("render No data found ", () => {
  it("should show props id data found", () => {
let props = {}
expect(NoDataFound(props)).toBe(true)
  });
});

