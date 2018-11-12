import { connect } from 'react-redux';
import Users from '../components/Users';
import {
  fetchUsers,
  setUser,
  setQuery,
  filterByName,
  sortByKey,
} from '../actions/usersActions';

const mapStateToProps = state => ({
  data: state.usersReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers() {
    dispatch(fetchUsers());
  },
  setUser(user) {
    dispatch(setUser(user));
  },
  setQuery(evt) {
    dispatch(setQuery(evt));
  },
  filterByName(users) {
    dispatch(filterByName(users));
  },
  sortByKey(event, key, order, users) {
    dispatch(sortByKey(event, key, order, users));
  },
});

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default UsersContainer;
