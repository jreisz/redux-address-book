import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';

describe('Home', () => {
  it('renders container', () => {
    const wrapper = document.createElement('div');
    ReactDOM.render(<Home />, wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});
