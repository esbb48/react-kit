import React from 'react';
import { Box, Container, TableRow } from '@material-ui/core';
import { GENDER } from 'constants/text.config';
import { toDateText } from 'utils/dateUtils';
import TableWrapper from 'components/Table/TableWrapper';
import { ActionCell, TextCell } from 'components/Table/TableCells';
const HEADERS = ['id', '名字', '性別', ''];
class UserScreen extends React.PureComponent {
  componentDidMount() {
    this.props.handleGetUsers();
  }
  render() {
    const { rows, total } = this.props;
    const handleDeleteUser = userId => () => {
      this.props.handleDeleteUser({ userId });
    };

    const actions = [
      {
        text: '刪除',
        variant: 'contained',
        onClick: handleDeleteUser,
      },
    ];
    return (
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Box>更新時間：{toDateText(1633502050540)}</Box>
          <Box sx={{ pt: 3 }}>
            <TableWrapper headers={HEADERS} total={total}>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  <TextCell value={row.id} />
                  <TextCell value={row.name} />
                  <TextCell value={GENDER[row.gender]} />
                  <ActionCell
                    actions={actions}
                    targetId={row.id}
                    targetIndex={index}
                  />
                </TableRow>
              ))}
            </TableWrapper>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default UserScreen;
