import user from "./user";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should check url", async () => {
  let data = [
    {
     name : "Luke Skywalker",
     dateOfBirth : "19BBY"
    }
  ];
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
  let user = new UserService();
  let headers = "Content-Type/json";

  console.log(search.validate(global.fetch()));
  expect(
    UserService.validate(
      `https://swapi.co/api/people?search=${unescape(data.UserName)}`,
      data,
      true
    )
  ).toEqual(global.fetch(json));
});
