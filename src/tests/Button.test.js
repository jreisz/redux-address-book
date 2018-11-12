import React from 'react';
import { shallow } from 'enzyme';
import './enzymeAdapter';
import Button from '../components/Button';

const mockOnClick = jest.fn();
const mockProps = {
  onClick: mockOnClick,
  className: 'a-class-name',
  text: 'Click me!',
};

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button {...mockProps} />);
  });

  it('renders like expected (snapshot)', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
