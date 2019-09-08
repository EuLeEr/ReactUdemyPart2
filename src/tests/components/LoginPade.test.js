import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('should render Login page correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<LoginPage />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});


test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});