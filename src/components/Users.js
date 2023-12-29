import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import UserItem from './UserItem';
import SearchInput from './SearchInput';

const debounce = (function(){
  var timer = 0;
  return (function(callback, ms){
      if(typeof(callback) !== "function"){                
        throw callback;
      }
      this.props.isTyping(true);
      clearTimeout(timer);
      timer = setTimeout(callback,ms); 
  });
})();

class Users extends Component {
  
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }
  submitQuery() {
    this.props.isTyping(false);
    const {  filterByName, data } = this.props;

    filterByName(data.users);
  }

   handleQueryChange(evt) {

    this.props.setQuery(evt);

    debounce(() =>this.submitQuery(), 300)
    
  }

  render() {
    const { data, setUser, setQuery, sortByKey } = this.props;

    return (
      <div className="container">
        <SearchInput
          handleSearchInput={evt => this.handleQueryChange(evt)}     
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
