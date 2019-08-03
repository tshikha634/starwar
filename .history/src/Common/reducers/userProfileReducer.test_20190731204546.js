import userProfileReducer from "./userProfileReducer";
import * as types from "../actions/userProfileActions";
import expect from "expect";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("team reducer", () => {
  it("should return the initial state");
  it("should handle USER_PROFILE");
  it("should handle USER_PROFILE_SUCCESS");
  it("should handle USER_PROFILE_FAILURE");
});
