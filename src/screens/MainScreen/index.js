import { connect } from 'react-redux';
import screen from './view';

const mapStateToProps = ({ auth, layout }) => ({
  isAuth: auth.isAuth,
  isFetching: Object.keys(layout.fetchAction).length > 0,
  snackbar: layout.snackbar,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(screen);
