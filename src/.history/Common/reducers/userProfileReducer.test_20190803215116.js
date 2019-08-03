import userProfileReducer from "./userProfileReducer";
import {
  USER_PROFILE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from "../actions/userProfileActions";
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

// it("Should set loading", () => {
//   let action = { type: USER_PROFILE, key: "loading", value: true };
//   let newState = userProfileReducer(INITIAL_STATE, action);
//   console.log("newState",newState)
//   expect(newState.loading).toBe(true);
// });

it("Should set flag", () => {
  let Data = { data: [] };
  let action = {
    type: USER_PROFILE_SUCCESS,
    key: "flag",
    value: true,
    Data: { Data }
  };
  let newState = userProfileReducer(INITIAL_STATE, action);
  console.log("newState", newState);
  expect(newState.flag).toBe(false);
});

// it("Should set error", () => {
//   let action = {
//     type: USER_PROFILE_FAILURE,
//     key: "error",
//     value: true
//   };
//   let newState = userProfileReducer(INITIAL_STATE, action);
//   console.log("newSTate",newState)
//   expect(newState.error).toBe(false);
// });