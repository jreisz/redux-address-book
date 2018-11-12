import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {
  render() {
    const { handleSearchInput, handleSubmitQuery, query } = this.props;
    return (
      <div className="">
        <div className="">
          <form onSubmit={evt => handleSubmitQuery(evt)} id="search-form">
            <div className="input-group">
              <input
                onChange={evt => handleSearchInput(evt)}
                value={query}
                className="input-group-field"
                type="search"
                placeholder="Search..."
                ref="searchInput"
                id="search-input-field"
                autoFocus
              />
              <div className="input-group-button">
                <button className="button" type="submit">
                  Search&nbsp;
                  <i className="fi-magnifying-glass" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  handleSubmitQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
};

SearchInput.defaultProps = {
  query: '',
};
