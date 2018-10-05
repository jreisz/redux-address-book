import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const App = ({ children }) => (
  <div>
    <Navbar />
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell large-10 medium-10 small-12 medium-offset-1 large-offset-1">
          <p />
          {children}
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
