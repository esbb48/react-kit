import { TableCell } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextCell = ({ value }) => {
  return <TableCell>{value}</TableCell>;
};

TextCell.propTypes = {
  value: PropTypes.string.isRequired,
};

TextCell.defaultProps = {
  value: [],
};

export default TextCell;
