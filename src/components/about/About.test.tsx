import * as React from 'react';
import { shallow } from 'enzyme';
import { About } from './index';

test('About component snapshot renders correctly', () => {
  const component = shallow(<About/>);
  expect(component).toMatchSnapshot();
});