import {DataProvider} from './DataProvider'
import {mount} from 'enzyme'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("StateValidatorUnique", () => {
  it("should fail if positive value is not given", () => {
    // let dataProvider = new DataProvider();
  });
it('should check url',async () => {
  let _baseUrl = "https://swapi.co/api";
let url = 'people';
  let furl = `${_baseUrl}/${url}`;
  //FirstName Change Event
  
  const wrapper = mount(DataProvider)
  // const childWrapper = wrapper.find();
  wrapper.instance().manageUrl(furl);
})
})