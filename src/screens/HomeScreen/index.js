import { connect } from 'react-redux';
import { createAction } from 'redux/actionUtils';
import HomeScreen from './view';

const mapStateToProps = ({ auth }) => ({
  userNmae: auth.userNmae,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(createAction('LOGOUT')());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
