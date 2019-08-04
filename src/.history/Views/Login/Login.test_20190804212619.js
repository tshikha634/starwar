import React from 'react'
import Login from './Login'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import UserService from "../../Services/user/user";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom')
const historyMock = { push: jest.fn() };
const mockGetUserService = jest.fn();

mockGetUserService.mockReturnValue({
  success: true,
  data: ["Luke Skywalker", "19BBY"]
})

jest.mock("../../Services/user/user",
  () => jest.fn().mockImplementation(
    () => ({
      validate: mockGetUserService,
    })))

beforeEach(() => {
  UserService.mockClear();
});
const mockStore = configureMockStore();
const getUserProfileAction = jest.fn()
const getUserProfileActionSuccess = jest.fn()
const store = mockStore({
  searchPlanet: {
    data:{
      results : [
        {UserName : "Yuvin", password:"19BBY"}
      ]
  },
  },
});

it('should render Login', () => {
   const wrapper = mount(
     <Provider
       store={store}
       history={historyMock}
       getUserProfileAction={getUserProfileAction}
       getUserProfileActionSuccess={getUserProfileActionSuccess}
     >
       <Login />
     </Provider>
   );
  expect(UserService).toHaveBeenCalled();
  setTimeout(() => {
    expect(mockGetUserService).toHaveBeenCalledWith();
  }, 20)
});

it('should render Login', () => {
 const wrapper = mount(
   <Provider
     store={store}
     getUserProfileAction={getUserProfileAction}
     getUserProfileActionSuccess={getUserProfileActionSuccess}
   >
     <Login />
   </Provider>
 );
  expect(wrapper.find('label')).toHaveLength(2)
});

it('should render Login', () => {
   const wrapper = mount(
     <Provider
       store={store}
       getUserProfileAction={getUserProfileAction}
       getUserProfileActionSuccess={getUserProfileActionSuccess}
     >
       <Login />
     </Provider>
   );
  expect(wrapper.find('Input')).toHaveLength(2)
});

it('should call  Inpu@12', () => {    
   const wrapper = mount(
     <Provider
       store={store}
       getUserProfileAction={getUserProfileAction}
       getUserProfileActionSuccess={getUserProfileActionSuccess}
     >
       <Login />
     </Provider>
   );
  let event = { target: { value: "UserName" } }
  wrapper.find('Input').first().simulate('change', { target: event });
});

it('should render Button@0', () => {
   const wrapper = mount(
     <Provider
       store={store}
       getUserProfileAction={getUserProfileAction}
       getUserProfileActionSuccess={getUserProfileActionSuccess}
     >
       <Login />
     </Provider>
   );
  expect(wrapper.find('Button').at(0).simulate("click"))
});


it("should click login button", async () => {
   const wrapper = mount(
     <Provider
       store={store}
       history={historyMock}
       getUserProfileAction={getUserProfileAction}
       getUserProfileActionSuccess={getUserProfileActionSuccess}
     >
       <Login />
     </Provider>
   );
  wrapper.find("Button#loginButton").simulate("click");
});


it("should render span@0 text props", () => {
   const wrapper = mount(
     <Provider
       store={store}
       history={historyMock}
       getUserProfileAction={getUserProfileAction}
       getUserProfileActionSuccess={getUserProfileActionSuccess}
     >
       <Login />
     </Provider>
   );
  expect(wrapper.find("Button#loginButton").props());
});

it("should simulate span@0", () => {
  expect(
    wrapper
      .find("Button#loginButton")
      .props()
      ["onClick"](store)
  );
});