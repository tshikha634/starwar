import searchPlanets from "./searchPlanets";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });


it("should check url",async () => {
  let data = "test"
global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      resolve({
        status: 200,
        mode: "cors",
        headers: headers,
        json: () => {
          return Promise.resolve(data);
        }
      });
    })
);
  let search = new searchPlanets();
  let headers = "Content-Type/json"
  let params = "test"
  console.log(search.getPlanetsByName());
  expect(
    search.getPlanetsByName(
      `planets/?search${params}`,
      true
    )
  ).toEqual(data);
});
