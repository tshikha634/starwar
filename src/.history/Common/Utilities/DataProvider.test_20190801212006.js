import {DataProvider} from './DataProvider'
import mount from 'enzyme'

describe("StateValidatorUnique", () => {
  it("should fail if positive value is not given", () => {
    let dataProvider = new DataProvider();
  });
it('should check url',() => {
  let _baseUrl = "https://swapi.co/api";
let url = 'people';
  let furl = `${_baseUrl}/${url}`;
  //FirstName Change Event
  
  const wrapper = mount(DataPropvider)
  // const childWrapper = wrapper.find();
  wrapper.instance().manageUrl(furl);
})
})