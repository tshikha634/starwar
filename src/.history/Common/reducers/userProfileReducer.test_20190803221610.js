import userProfileReducer from "./userProfileReducer";
import {
  USER_PROFILE_SUCCESS,
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
    Data: { Dataa }
  };
  let newState = userProfileReducer(INITIAL_STATE, action);
  expect(newState).toBe(Dataa);
});
