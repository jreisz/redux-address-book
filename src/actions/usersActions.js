import axios from 'axios';

export function fetchUsers() {
  return {
    type: 'FETCH_USER',
    payload: axios.get('https://randomuser.me/api/?results=50&nat=fi,dk,fr,gb&seed=foobar'),
  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}

export function setQuery(evt) {
  return {
    type: 'SET_QUERY',
    payload: evt.target.value,
  };
}

export function filterByName(users) {
  return {
    type: 'FILTER_BY_NAME',
    payload: users,
  };
}

export function sortByKey(event, key, order, users) {
  return {
    type: 'SORT_BY_KEY',
    payload: {
      event,
      sortKey: key,
      order,
      usersToSort: users,
    },
  };
}
