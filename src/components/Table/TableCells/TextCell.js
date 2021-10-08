import { TableCell as BaseTextCell } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextCell = ({ value }) => {
  return <BaseTextCell>{value}</BaseTextCell>;
};

TextCell.propTypes = {
  value: PropTypes.string.isRequired,
};

TextCell.defaultProps = {
  value: [],
};

export default TextCell;
