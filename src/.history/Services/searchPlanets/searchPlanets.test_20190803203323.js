import searchPlanets from "./searchPlanets";
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

it("should check url",async () => {
  let search = new searchPlanets();
  coonsole.log(search.GetData())
  expect(
    search.GetData(`planets/?search${params}`,'sdsd',true)
  ).toEqual('erewr');
});
