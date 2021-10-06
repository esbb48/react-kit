import { connect } from 'react-redux';
import { createAction } from 'redux/actionUtils';
import HomeScreen from './view';

const mapStateToProps = ({ auth, user }) => ({
  userName: auth.userName,
  rows: user.rows,
  total: user.total,
});

const mapDispatchToProps = dispatch => ({
  handleGetUsers: payload => {
    dispatch(createAction('GET_USERS')(payload));
  },
  handleDeleteUser: payload => {
    dispatch(createAction('DELETE_USER')(payload));
  },
  handleLogout: () => {
    dispatch(createAction('LOGOUT')());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
