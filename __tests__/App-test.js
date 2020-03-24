/**
 * @format
 */

import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Albums from '../src/scenes/Albums';

configure({ adapter: new Adapter() })
describe('Image Loader', () => {
  it('Image Loader should render correctly in "debug" mode', () => {
    const component = shallow(<Albums />);
  
    expect(component).toMatchSnapshot();
  });
});
