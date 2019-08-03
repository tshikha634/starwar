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

let INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  flag: false
};

it("Should set loading", () => {
  let action = { type: SEARCH_PLANET_LIST, key: "loading", value: true };
  let newState = customerListReducer(INITIAL_STATE, action);
  expect(newState.loading).toBe(true);
});

it("Should set flag", () => {
  let Data = { data: [] };
  let action = {
    type: SEARCH_PLANET_LIST_SUCCESS,
    key: "flag",
    value: true,
    Data: { Data }
  };
  let newState = customerListReducer(INITIAL_STATE, action);
  expect(newState.flag).toBe(true);
});

it("Should set error", () => {
  let action = {
    type: SEARCH_PLANET_LIST_FAILURE,
    key: "error",
    value: true
  };
  let newState = customerListReducer(INITIAL_STATE, action);
  expect(newState.error).toBe(true);
});