const initalState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  term: '',
  firstNameOrder: 'desc',
  lastNameOrder: 'desc',
  isTyping:false,
  startTypingAt:null,
  delay:300
};

// REDUCER
function usersReducer(state = initalState, action) {
  let users;
  let nextState;

  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { ...state, loading: true };

    case 'FETCH_USER_FULFILLED':
      users = action.payload.data.results;
      users.sort((a, b) => a.name.first.localeCompare(b.name.first));

      let filteredUsers;
      if (state.filteredUsers.length <= 0) {
        filteredUsers = users;
      } else {
        filteredUsers = state.filteredUsers;
      }

      return {
        ...state,
        loading: false,
        users,
        filteredUsers,
      };

    case 'FETCH_USER_REJECTED':
      return {
        ...state,
        loading: false,
        error: `Could not fetch data from the API. Server replied with: ${action.payload.message}.`,
      };

    case 'SET_QUERY':
      nextState = { ...state, term: action.payload };
      return nextState;
    case 'IS_TYPING':
      nextState = { ...state, isTyping: action.payload };
      return nextState;
    case 'FILTER_BY_NAME':
      const term = state.term.toLowerCase();
      const people = [...action.payload];
      const filteredPeople = people.filter(
        person => {
          return ((person.name.first.toLowerCase()).indexOf(term, 0) === 0
            || (person.name.last.toLowerCase()).indexOf(term, 0) === 0)

        }

      );
      nextState = { ...state, filteredUsers: filteredPeople.slice(0, 5) };
      return nextState;

    case 'SORT_BY_KEY':
      const { sortKey, order, usersToSort } = action.payload;

      if (sortKey === 'first') {
        if (order === 'asc') {
          usersToSort.sort((a, b) => a.name.first.localeCompare(b.name.first));
          nextState = { ...state, filteredUsers: usersToSort, firstNameOrder: 'desc' };
        } else {
          usersToSort.sort((a, b) => b.name.first.localeCompare(a.name.first));
          nextState = { ...state, filteredUsers: usersToSort, firstNameOrder: 'asc' };
        }
      }

      if (sortKey === 'last') {
        if (order === 'asc') {
          usersToSort.sort((a, b) => a.name.last.localeCompare(b.name.last));
          nextState = { ...state, filteredUsers: usersToSort, lastNameOrder: 'desc' };
        } else {
          usersToSort.sort((a, b) => b.name.last.localeCompare(a.name.last));
          nextState = { ...state, filteredUsers: usersToSort, lastNameOrder: 'asc' };
        }
      }

      return nextState;

    default:
      return state;
  }
}

export default usersReducer;
