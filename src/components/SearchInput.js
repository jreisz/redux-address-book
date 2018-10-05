import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {

  render() {
    const { handleSearchInput, handleSubmitQuery, query } = this.props;
    return (
      <div className="">
        <div className="">
          <form onSubmit={evt => handleSubmitQuery(evt)}>
            <div className="input-group">
              <input
                onChange={evt => handleSearchInput(evt)}
                value={query}
                className="input-group-field"
                type="search"
                placeholder="Search..."
                ref="searchInput"
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
  handleSearchInput: PropTypes.func,
  handleSubmitQuery: PropTypes.func,
  query: PropTypes.string,
};
