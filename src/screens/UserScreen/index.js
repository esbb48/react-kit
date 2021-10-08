import { connect } from 'react-redux';
import { createAction } from 'redux/actionUtils';
import UserScreen from './view';

const mapStateToProps = ({ user }) => ({
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
