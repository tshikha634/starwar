import DataProvider from './DataProvider'
import React from 'react'
import {mount} from 'enzyme'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
 

// GetData(){
// return Observable.forkJoin(
// this.http.GET('https://swapi.co/api/planets/?search${params}').map((response) => response.json())
// .catch((error) => Observable.throw(error.json().error || 'Server error')),
// this.http.GET('https://swapi.co/api/planets/?search${params}').map((response) => res.json()
// .catch((error) => Observable.throw(error.json().error || 'Server error')))
// );
// }

 beforeEach(function() {
   window.fetch = jest
     .fn()
     .mockImplementation(() => Promise.resolve({ ok: true, name: "Luke Skywalker" }));
 });

  it("should check url", () => {
    let _baseUrl = "https://swapi.co/api";
    let url = "people";
    let furl = `${_baseUrl}/${url}`;
  let dataProvider = new DataProvider();
  expect(dataProvider.manageUrl("people","people",true)).toEqual(furl);
 
  });
  
  it("should check url", async (response) => {
    let dataProvider = new DataProvider();
    // json = jest.fn();
    // const response = response;
    dataProvider.commonResponse();
    console.log(dataProvider.commonResponse(response))
  });

  it("should check url", async () => {
    let params = {page : '1'}
    let dataProvider = new DataProvider();
    // json = jest.fn();
    // const response = response;
    dataProvider.GetData();
    console.log(dataProvider.GetData(`planets/?search${params}`));
  });