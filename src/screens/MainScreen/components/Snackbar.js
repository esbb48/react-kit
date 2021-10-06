import { useEffect } from 'react';
const Snackbar = ({ id, text, status }) => {
  useEffect(() => {
    if (text.length === 0) return;
    alert(text);
  }, [id, text, status]);
  return null;
};

Snackbar.defaultProps = {
  id: 0,
  status: '',
  text: '',
};
export default Snackbar;
