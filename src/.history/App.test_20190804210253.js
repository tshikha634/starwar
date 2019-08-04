import React from 'react';
import {shallow} from 'enzyme/build';
import App from './App';
import containers from './containers/DefaultLayout'
import Login from './views/Pages/Login'
import { mount } from 'enzyme'



it('mounts without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount()
});
