import userProfileReducer from "./userProfileReducer";
import {
  USER_PROFILE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from "../actions/userProfileActions";
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

 describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      userProfileReducer(undefined, {
        data: [],
        loading: false,
        error: false,
        flag: false
      })
    ).toEqual({
      data: [],
      loading: false,
      error: false,
      flag: false
    });
  })
    // it("should handle GET_POST_START", () => {
    //   // it's empty on purpose because it's just starting to fetch posts
    //   expect(userProfileReducer({}, USER_PROFILE)).toEqual({data: []});
    // });
});
