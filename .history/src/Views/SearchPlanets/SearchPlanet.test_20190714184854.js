// import React from 'react';
// import { TransactionDashboardExtension } from './TransactionDashboardExtension'
// import { DashboardExtensions } from './DashboardExtensions'
// import { mount } from 'enzyme'
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
// const mockStore = configureMockStore();

// const store = mockStore({
//   data: {},
//   userProfile: {
//     userData: {
//       user: {
//         UserType: false
//       }
//     }
//   },
//   recurringPayment: {
//     RecPaymentSetupId: "",
//     FirstName: "",
//     MiddleName: "",
//     LastName: "",
//     EmailAddress: "",
//     Company: "",
//     MerchantId: null,
//     MerchantName: "",
//     Description: "",
//     PaymentsMadeCount: null,
//     PaymentsMadeAmount: null,
//     RemainingPaymentCount: null,
//     RemainingPaymentAmount: null,
//     PaymentsFailed: null,
//     Amount: null,
//     TaxValue: null,
//     TotalAmount: null,
//     SubscriptionAmount: null,
//     IsActive: true,
//     MaxConsecutiveFailure: null,
//     ConsecutiveFailures: null,
//     Occurrence: null,
//     Created: "",
//     StartDate: "",
//     EndDate: "",
//     CardDetail: null,
//     BankDetail: {
//       BankDetailId: null,
//       RoutingNumber: "",
//       AccountNumber: "",
//       BankAccountType: {
//         BankAccountTypeId: null,
//         BankAccountTypeName: ""
//       }
//     },
//     Frequency: {
//       FrequencyId: null,
//       FrequencyName: ""
//     },
//     Transactions: [],
//     errors: {}
//   },
//   masterData: {
//     masterData: {
//     }
//   },
// });
// const historyMock = { push: jest.fn() };
// const userData = {}
// const data = {}
// const value = {}
// const errors = {}
// jest.mock('../../Common/Utilities/stateValidator')

// const setNullState = () => ({ type: 'CUSTOMER_HYDRATE_NULL' })
// const updateDetails = () => ({ type: 'CUSTOMER_EDIT_FIELD' })

// it('should render Recurring Pay Setup', () => {
//   const RecurringPaySetup = [{ "error": "", loading: true, error: false, data: data }]
//   const wrapper = mount(<Provider store={store}>
//     <TransactionDashboardExtension
//       userData={userData}
//       updateDetails={updateDetails}
//       setNullState={setNullState}
//       RecurringPaySetup={RecurringPaySetup}
//       value={value} errors={errors}
//       onChange={() => { }}
//     />
//   </Provider>)
//   expect(wrapper.find(RecurringPaySetup)).toHaveLength(1);
// })

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

