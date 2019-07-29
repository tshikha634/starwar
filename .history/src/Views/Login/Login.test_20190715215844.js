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
  SearchService.mockClear();
});
const mockStore = configureMockStore();

const store = mockStore({
  searchPlanet: {
    data:{
  },
  },
});

it('should render Login', () => {
  const wrapper = mount(<Provider store={store}>
    <Login />
  </Provider>)
  expect(UserService).toHaveBeenCalled();
  setTimeout(() => {
    expect(mockGetUserService).toHaveBeenCalledWith();
  }, 20)
});

// it('should set current page number', () => {
//   const wrapper = mount(<Provider store={store}>
//     <SearchPlanets success={true} />
//   </Provider>)
//   let paginationWrapper = wrapper.find(Pagination).first()
//   paginationWrapper.props()['onChange'](1)
// })



