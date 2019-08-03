import searchPlanetReducer from "./searchPlanetReducer";
import {
  SEARCH_PLANET_LIST,
  SEARCH_PLANET_LIST_SUCCESS,
  SEARCH_PLANET_LIST_FAILURE
} from "../actions/searchPlanetsActions";
import expect from "expect";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(searchPlanetReducer(undefined, {})).toEqual({
      data: [],
      loading: false,
      error: false,
      flag: false
    });
  });

  it("should handle SEARCH_PLANET_LIST", () => {
    var state = { data: [], loading: true, error: false, flag: false };
    // it's empty on purpose because it's just starting to fetch posts
    let action = SEARCH_PLANET_LIST;
    expect(searchPlanetReducer(action, state)).toEqual(action, {
      data: [],
      loading: true,
      error: false,
      flag: false
    });
  });
  it("should handle USER_PROFILE_SUCCESS", () => {
    let Data = {};
    var state = {
      data: Data,
      loading: false,
      error: false,
      flag: true
    };
    // it's empty on purpose because it's just starting to fetch posts
    let action = SEARCH_PLANET_LIST_SUCCESS;
    expect(searchPlanetReducer(action, state)).toEqual(action, {
      data: Data,
      loading: false,
      error: false,
      flag: true
    });
  });
  it("should handle SEARCH_PLANET_LIST_FAILURE", () => {
    var state = {
      data: [],
      loading: false,
      error: true,
      flag: false
    };
    // it's empty on purpose because it's just starting to fetch posts
    let action = SEARCH_PLANET_LIST_FAILURE;
    expect(searchPlanetReducer(action, state)).toEqual(action, {
      data: [],
      loading: false,
      error: true,
      flag: false
    });
  });
});
