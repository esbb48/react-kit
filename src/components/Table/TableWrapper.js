import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { Box, Card, Table, TableBody } from '@material-ui/core';
import TableHead from './TableHead';
import TablePagination from './TablePagination';

const TableWrapper = ({ children, headers, total, ...rest }) => {
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead headers={headers} />
            <TableBody>{children}</TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination total={total} />
    </Card>
  );
};

TableWrapper.propTypes = {
  headers: PropTypes.array.isRequired,
};

TableWrapper.defaultProps = {
  headers: [],
};

export default TableWrapper;
