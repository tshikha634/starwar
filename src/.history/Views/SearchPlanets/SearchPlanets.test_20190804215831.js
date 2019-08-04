import React from 'react'
import SearchPlanets from './SearchPlanets'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import SearchService from '../../Services/searchPlanets/searchPlanets';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Pagination from 'react-js-pagination';

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
      { name: 'Alderain' },
    ]
  },
  },
});

it('should render SearchPlanets', () => {
  const wrapper = mount(<Provider store={store}>
    <SearchPlanets success={true}/>
  </Provider>)
  expect(SearchService).toHaveBeenCalled();
  setTimeout(() => {
    expect(mockGetResults).toHaveBeenCalledWith();
  }, 20)
});

it('should set current page number', () => {
  const wrapper = mount(<Provider store={store}>
    <SearchPlanets success={true} />
  </Provider>)
  let paginationWrapper = wrapper.find(Pagination).first()
  paginationWrapper.props()['onChange'](1)
})


it("check Modal exist with props", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPlanets success={true} />
    </Provider>
  );
  expect(wrapper.find("Modal").exists()).toBe(true);
});

it("CHANGE Modal visible state", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPlanets success={true} />
    </Provider>
  );
  wrapper.setState({ showPopup: true });
  expect(wrapper.find("Modal").props().isOpen).toBe(true);
});

// it("Call Modal onClickAway function", () => {
//   const wrapper = mount(
//     <Provider store={store}>
//       <SearchPlanets success={true} />
//     </Provider>
//   );
//   wrapper.setState({ showPopup: true });
//   const onClickAway = jest.fn();
//   onClickAway();
//   expect(onClickAway).toHaveBeenCalled();
//   wrapper
//     .find("Modal")
//     .props()
//     .onClickAway();
// });

// it("check Modal props", () => {
//   const wrapper = mount(
//     <Provider store={store}>
//       <SearchPlanets success={true} />
//     </Provider>
//   );
//   wrapper.setState({ showPopup: true });
//   expect(wrapper.find("Modal").props().effect).toEqual("fadeInDown");
//   expect(wrapper.find("Modal").props().fade).toEqual(true);
//   expect(wrapper.find("Modal").props().width).toEqual("800");
//   expect(wrapper.find("Modal").props().height).toEqual("300");
// });

