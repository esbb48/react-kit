import { connect } from 'react-redux';
import screen from './view';

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(screen);
