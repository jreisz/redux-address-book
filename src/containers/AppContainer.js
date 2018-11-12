import { connect } from 'react-redux';
import App from '../components/App';
import { fetchUsers, setUser } from '../actions/usersActions';

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
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
