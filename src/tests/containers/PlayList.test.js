import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { createMemoryHistory } from 'history'
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import getPlayList from '../mocks/PlayListService';

import PlayList from '../../containers/PlayList'
jest.mock('../mocks/PlayListService')


it("fetches list songs from ccmixter and renders them on mount", done => {
    console.log(getPlayList)
    Enzyme.configure({ adapter: new Adapter() })
    const setRouteLeaveHook =jest.fn();
    const wrapper = shallow(
            <PlayList.WrappedComponent params={{router: 
            setRouteLeaveHook
        }} />);
    console.log(wrapper.debug())
      
    setTimeout(() => {

      wrapper.update();
      console.log(wrapper.debug())
      expect(wrapper.find('div').length).toEqual(1);
  
      done();
    });
  });
