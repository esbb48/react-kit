import { Button, TableCell } from '@material-ui/core';
import PropTypes from 'prop-types';

const ActionCell = ({ actions, targetId, targetIndex }) => {
  return (
    <TableCell>
      {actions.map(({ payload, text, onClick, ...rest }) => (
        <Button key={text} onClick={onClick(targetId, targetIndex)} {...rest}>
          {text}
        </Button>
      ))}
    </TableCell>
  );
};

ActionCell.propTypes = {
  actions: PropTypes.array,
};

ActionCell.defaultProps = {
  actions: [],
};

export default ActionCell;
