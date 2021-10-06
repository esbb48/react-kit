import { connect } from 'react-redux';
import { createAction } from 'redux/actionUtils';
import LoginScreen from './view';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: payload => {
    dispatch(createAction('LOGIN')(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
