import React from 'react';
import { shallow } from 'enzyme';
import './enzymeAdapter';
import SearchInput from '../components/SearchInput';

const mockHandleSearchInput = jest.fn();
const mockHandleSubmitQuery = jest.fn();
const mockProps = {
  handleSearchInput: mockHandleSearchInput,
  handleSubmitQuery: mockHandleSubmitQuery,
  query: 'Anna',
};

describe('SearchInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchInput {...mockProps} />);
  });

  it('renders like expected (snapshot)', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has submit function', () => {
    wrapper.find('#search-form').simulate('submit', {
      preventDefault: () => {},
      target: { value: 'some value' },
    });

    expect(mockHandleSubmitQuery).toHaveBeenCalledTimes(1);
  });

  it('handles search input field', () => {
    wrapper.find('#search-input-field').simulate('change', {
      preventDefault: () => {},
      target: { value: 'some value' },
    });

    expect(mockHandleSearchInput).toHaveBeenCalledTimes(1);
  });
});
