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
  flag:false
};


it("Should set flag", () => {
  let Dataa = { data: [] };
  let action = {
    type: USER_PROFILE_SUCCESS,
    Data: { Dataa },
    flag:true
  };
  let newState = userProfileReducer(INITIAL_STATE, action);
  console.log(newState.Data)
  expect(newState.Data).toBe(Dataa);
});
