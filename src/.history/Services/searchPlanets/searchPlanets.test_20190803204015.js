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
  let params = "test"
  console.log(search.getPlanetsByName(params));
  expect(
    search.getPlanetsByName(`planets/?search${params}`, "test",  true)
  ).toEqual("test");
});
