import React from "react";
import SearchPlanets from "./SearchPlanets";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Pagination from "react-js-pagination";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom");

const mockGetResults = jest.fn();
const handleChange = jest.fn();
const onSearchClick = jest.fn();
const onClear = jest.fn();
const onChange = jest.fn();
const redirectToCreate = jest.fn();

mockGetResults.mockReturnValue({
  success: true,
  data: ["name", "population ", "rotation_period"]
});

jest.mock("../../Services/searchPlanets/searchPlanets", () =>
  jest.fn().mockImplementation(() => ({
    getPlanetsByName: mockGetResults
  }))
);

beforeEach(() => {
  SearchService.mockClear();
});
const mockStore = configureMockStore();

const store = mockStore({
  searchPlanet: {
    data: {
      results: [{ name: "Alderain" }]
    }
  }
});

it("should render SearchPlanets", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPlanets success={true} />
    </Provider>
  );
  expect(SearchService).toHaveBeenCalled();
  setTimeout(() => {
    expect(mockGetResults).toHaveBeenCalledWith();
  }, 20);
});

it("should set current page number", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPlanets success={true} />
    </Provider>
  );
  let paginationWrapper = wrapper.find(Pagination).first();
  paginationWrapper.props()["onChange"](1);
});

it("check Modal exist with props", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPlanets success={true} />
    </Provider>
  );
  expect(wrapper.find("Modal").exists()).toBe(true);
});

it("check Modal exist with props", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPlanets success={true} />
    </Provider>
  );
    expect(
      wrapper
        .find("Button#searchClick")
        .at(0)
        .simulate("click")
    );
});

it("check Pagination onChange", () => {
  const wrapper = mount(
    <Provider store={store}>
      <SearchPlanets success={true} />
    </Provider>
  );
  const pages = "25";
  onChange(pages);
  expect(onChange).toHaveBeenCalledWith(pages);
  wrapper
    .find(Pagination)
    .props()
    .onChange(pages);
  wrapper.find(Pagination).props().value = pages;
  expect(wrapper.find(Pagination).props().value).toBe(pages);
});