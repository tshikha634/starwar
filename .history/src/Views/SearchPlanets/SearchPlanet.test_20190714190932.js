import React from 'react';
import SearchPlanets from './SearchPlanets'
import { mount } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

const store = mockStore({
  data: {},
  results: {
    
  },
});
const data = {}
const value = {}
const errors = {}
jest.mock('../../Common/Utilities/stateValidator')


it('should render Recurring Pay Setup', () => {
  const searchPlanet = [{  loading: true, error: false, data: data }]
  const wrapper = mount(<Provider store={store}>
    <SearchPlanets
searchPlanet={searchPlanet}
      value={value} errors={errors}
      onChange={() => { }}
    />
  </Provider>)
  expect(wrapper.find(SearchPlanets)).toHaveLength(1);
})

// it('should render Recurring Pay Setup', () => {
//   const TransactionDashboard = [{ "error": "", loading: true, error: false, data: data }]
//   const wrapper = mount(<Provider store={store}>
//     <DashboardExtensions
//       userData={userData}
//       updateDetails={updateDetails}
//       setNullState={setNullState}
//       TransactionDashboard={TransactionDashboard}
//       value={value} errors={errors}
//       onChange={() => { }}
//     />
//   </Provider>)
//   expect(wrapper.find(TransactionDashboard)).toHaveLength(1);
// })

// it('should render Recurring Pay Setup', () => {
//   const TransactionDashboard = [{ "error": "", loading: true, error: false, data: data }]
//   const wrapper = mount(<Provider store={store}>
//     <DashboardExtensions
//       userData={userData}
//       updateDetails={updateDetails}
//       setNullState={setNullState}
//       TransactionDashboard={TransactionDashboard}
//       value={value}
//       errors={errors}
//       onChange={() => { }}
//     />
//   </Provider>)
//   expect(wrapper.find(TransactionDashboard)).toHaveLength(1);
// })

