import userProfileReducer from "./userProfileReducer";
import {
  USER_PROFILE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from "../actions/userProfileActions";
import * as actions from "../actions/userProfileActions";
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
    expect(userProfileReducer(undefined, {})).toEqual({
      data: [],
      loading: false,
      error: false,
      flag: false
    });
  })
    
    it("should handle USER_PROFILE", () => {
       var state= {data: [], loading: true, error: false, flag: false }
      // it's empty on purpose because it's just starting to fetch posts
      let action = USER_PROFILE;
      expect(userProfileReducer(action, state)).toEqual({
        data: [],
        loading: true,
        error: false,
        flag: false
      });
    });
      it("should handle USER_PROFILE", () => {
        let Data = {}
        var state = {
          data: Data,
          loading: false,
          error: false,
          flag: true
        };
        // it's empty on purpose because it's just starting to fetch posts
        let action = USER_PROFILE_SUCCESS;
        expect(userProfileReducer(action, state)).toEqual( {
          data: Data,
          loading: false,
          error: false,
          flag: true
        });
      });
      it("should handle USER_PROFILE", () => {
        var state = {
          data: [],
          loading: false,
          error: true,
          flag: false
        };
        // it's empty on purpose because it's just starting to fetch posts
        let action = USER_PROFILE_FAILURE;
        expect(userProfileReducer(action, state)).toEqual({
          data: [],
          loading: false,
          error: true,
          flag: false
        });
      });
 });