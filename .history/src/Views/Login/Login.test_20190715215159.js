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

const mockGetResults = jest.fn();

mockGetResults.mockReturnValue({
  success: true,
  data: ["name", "population ", "rotation_period"]
})

jest.mock('../../Services/searchPlanets/searchPlanets',
  () => jest.fn().mockImplementation(
    () => ({
      getPlanetsByName: mockGetResults,
    })))

beforeEach(() => {
  SearchService.mockClear();
});
const mockStore = configureMockStore();

const store = mockStore({
  searchPlanet: {
    data:{
    results: [
      { name: 'Alderain', population: 2000000000, diameter: 12500, rotation_period: 24, orbital_period: 364 },
    ]
  },
  },
});

// it('should render SearchPlanets', () => {
//   const wrapper = mount(<Provider store={store}>
//     <SearchPlanets success={true}/>
//   </Provider>)
//   expect(SearchService).toHaveBeenCalled();
//   setTimeout(() => {
//     expect(mockGetResults).toHaveBeenCalledWith();
//   }, 20)
// });

// it('should set current page number', () => {
//   const wrapper = mount(<Provider store={store}>
//     <SearchPlanets success={true} />
//   </Provider>)
//   let paginationWrapper = wrapper.find(Pagination).first()
//   paginationWrapper.props()['onChange'](1)
// })



