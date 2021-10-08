import { Backdrop, CircularProgress } from '@material-ui/core';
const Fetching = ({ hidden }) => {
  if (hidden) return null;

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={!hidden}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

Fetching.defaultProps = {
  hidden: true,
};
export default Fetching;
