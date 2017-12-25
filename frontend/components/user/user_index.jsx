import React from "react";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLoaded: false
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {

    return (
      <div>
        <h1>
          User Index
        </h1>
        <ul>
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
