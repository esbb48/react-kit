import { useState } from 'react';
import PropTypes from 'prop-types';
import { TablePagination as BaseTablePagination } from '@material-ui/core';

const TablePagination = ({ total }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <BaseTablePagination
      component='div'
      count={total}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleLimitChange}
      page={page}
      rowsPerPage={limit}
      rowsPerPageOptions={[5, 10, 25]}
    />
  );
};

TablePagination.propTypes = {
  total: PropTypes.array.isRequired,
};

export default TablePagination;
