import React from "react";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {

    return (
      <div>
        <h1>
          Users
        </h1>
        <ul id="user-index">
          {
            this.props.users.map((user) => (
              <UserIndexItem
                user={user}
                fetchUsers={this.props.fetchUsers}
                />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default UserIndex;
