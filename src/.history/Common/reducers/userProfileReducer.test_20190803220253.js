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
};


it("Should set flag", () => {
  let Dataa = { data: [] };
  let action = {
    type: USER_PROFILE_SUCCESS,
    Data: { Data }
  };
  let newState = userProfileReducer(INITIAL_STATE, action);
  console.log("newState", newState);
  expect(newState.Data).toBe(Dataa);
});
