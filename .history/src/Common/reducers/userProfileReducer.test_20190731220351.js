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

Enzyme.configure({ adapter: new Adapter() });

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
      expect(userProfileReducer(action, state)).toEqual(action,{
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
        expect(userProfileReducer(action, state)).toEqual(action, {
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
        expect(userProfileReducer(action, state)).toEqual(action, {
          data: [],
          loading: false,
          error: true,
          flag: false
        });
      });
 });