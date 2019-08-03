import DataProvider from './DataProvider'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
 
global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      resolve({
        status: 200,
        mode: "cors",
        headers: headers,
        json: () => {
          return Promise.resolve(mock_data_login);
        }
      });
    })
);


  it("should check url", () => {
    let _baseUrl = "https://swapi.co/api";
    let url = "people";
    if(url.indexOf('http') > 0){
      expect(dataProvider.manageUrl("people", "people", true)).toEqual(
        url
      );
    }
    let furl = `${_baseUrl}/${url}`;
  let dataProvider = new DataProvider();
  expect(dataProvider.manageUrl("people","people",true)).toEqual(furl);
 
  });
  
  // res.json = { data: [res, dangerRate] };


  it("should check url", () => {
    let dataProvider = new DataProvider();
    let url = "people";
    console.log(dataProvider.GetData())
    expect(dataProvider.manageUrl(url).get(0).props.url).to.equal("http");
  });