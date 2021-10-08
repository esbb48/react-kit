import PropTypes from 'prop-types';
import {
  TableHead as BaseTableHead,
  TableCell,
  TableRow,
} from '@material-ui/core';

const TableHead = ({ headers }) => {
  return (
    <BaseTableHead>
      <TableRow>
        {headers.map(title => (
          <TableCell key={title}>{title}</TableCell>
        ))}
      </TableRow>
    </BaseTableHead>
  );
};

TableHead.propTypes = {
  headers: PropTypes.array.isRequired,
};

export default TableHead;
