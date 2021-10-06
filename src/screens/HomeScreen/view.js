import React from 'react';

class HomeScreen extends React.PureComponent {
  componentDidMount() {
    this.props.handleGetUsers();
  }
  render() {
    const { userName, rows, total, handleLogout } = this.props;
    const handleDeleteUser = userId => () => {
      this.props.handleDeleteUser({ userId });
    };
    return (
      <div>
        Hi {userName}，<button onClick={handleLogout}>登出</button>
        <div>使用者總共 {total} 筆數</div>
        <div>
          {rows.map(row => (
            <div key={row.id}>
              {row.id},{row.name}
              <button onClick={handleDeleteUser(row.id)}>刪除</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
