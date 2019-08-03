import userProfileReducer from "./userProfileReducer";
import * as types from "../actions/userProfileActions";
import expect from "expect";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import UserService from "../../Services/user/user"
Enzyme.configure({ adapter: new Adapter() });


const mockGetUserService = jest.fn();

mockGetUserService.mockReturnValue({
  success: true,
  data: ["Luke Skywalker", "19BBY"]
});

jest.mock("../../Services/user/user", () =>
  jest.fn().mockImplementation(() => ({
    validate: mockGetUserService
  }))
);

beforeEach(() => {
  UserService.mockClear();
});
// const mockStore = configureMockStore();

describe("team reducer", () => {
  it("should return the initial state");
  it("should handle USER_PROFILE");
  it("should handle USER_PROFILE_SUCCESS");
  it("should handle USER_PROFILE_FAILURE");
});
