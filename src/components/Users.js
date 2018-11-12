import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/App.css';
import UserItem from './UserItem';
import SearchInput from './SearchInput';

class Users extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  submitQuery(evt) {
    const { filterByName, data } = this.props;
    evt.preventDefault();
    filterByName(data.users);
  }

  handleQueryChange(evt) {
    const { setQuery } = this.props;
    setQuery(evt);
    if (evt.target.value.length <= 0) {
      this.submitQuery(evt);
    }
  }

  render() {
    const { data, setUser, setQuery, sortByKey } = this.props;

    return (
      <div className="container">
        <SearchInput
          handleSearchInput={evt => this.handleQueryChange(evt)}
          handleSubmitQuery={evt => this.submitQuery(evt)}
          query={data.term}
        />
        {data.error ? data.error : ''}
        <section className="block-list">
          <table className="users-table dashboard-table">
            <thead>
              <tr>
                <th width="70" />
                <th width="15">Title</th>
                <th
                  onClick={evt =>
                    sortByKey(
                      evt,
                      'first',
                      data.firstNameOrder,
                      data.filteredUsers,
                    )
                  }
                >
                  First name&nbsp;
                  <span
                    className={
                      data.firstNameOrder === 'asc' ? 'arrow-up' : 'arrow-down'
                    }
                  />
                </th>
                <th
                  onClick={evt =>
                    sortByKey(
                      evt,
                      'last',
                      data.lastNameOrder,
                      data.filteredUsers,
                    )
                  }
                >
                  Last Name&nbsp;
                  <span
                    className={
                      data.lastNameOrder === 'asc' ? 'arrow-up' : 'arrow-down'
                    }
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.filteredUsers.map((user, i) => {
                return (
                  <UserItem
                    key={i}
                    user={user}
                    onClick={() => setUser(user)}
                    term={data.term}
                    nullQuery={evt => setQuery(evt)}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func,
  filterByName: PropTypes.func,
  data: PropTypes.object,
  setQuery: PropTypes.func,
  setUser: PropTypes.func,
  sortByKey: PropTypes.func,
};

export default Users;
