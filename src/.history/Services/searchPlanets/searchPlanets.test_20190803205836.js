import searchPlanets from "./searchPlanets";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });


it("should check url",async () => {
                                    let data = [
                                      {
                                        name:
                                          "Alderaan",
                                        rotation_period:
                                          "24",
                                        orbital_period:
                                          "364",
                                        diameter:
                                          "12500"
                                      }
                                    ];
                                    global.fetch = jest.fn(
                                      () =>
                                        new Promise(
                                          resolve => {
                                            resolve(
                                              {
                                                status: 200,
                                                mode:
                                                  "cors",
                                                headers: headers,
                                                json: () => {
                                                  return Promise.resolve(
                                                    data
                                                  );
                                                }
                                              }
                                            );
                                          }
                                        )
                                    );
                                    let search = new searchPlanets();
                                    let headers =
                                      "Content-Type/json";
                                    let params = `page=1`;
                                    console.log(
                                      search.getPlanetsByName(
                                        global.fetch()
                                      )
                                    );
                                    // expect(
                                    //   search.getPlanetsByName(
                                    //     `https://swapi.co/api/planets/?search${params}`,
                                    //     data,
                                    //     true
                                    //   )
                                    // ).toEqual(global.fetch(json));
                                  });
