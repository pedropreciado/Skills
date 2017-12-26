import React from "react";
import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      input: "",
      inputLength: 0,
      users: []
    }

    this.filterUsers = this.filterUsers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.allUserButton = this.allUserButton.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
    this.props.fetchUsers();

  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  filterUsers() {
    return (event) => {
      let input = event.target.value;
      let inputLength = event.target.value.length;
      this.setState({
        input,
        inputLength,
      users: this.props.users.filter((user) => {
        return user.username.slice(0, inputLength).toLowerCase() == input.toLowerCase();
      })
    })
    }
  }

  allUserButton() {
    if (!!Object.keys(this.props.users)[0]) {
      return (
        <button onClick={this.handleClick}>
          All Users
        </button>
      )
    } else {
      return (
        <h3>
          Loading...
        </h3>
      )
    }
  }

  handleClick() {
    this.setState({users: this.props.users})
  }

  render() {

    return (
      <div>
        <h1>
          Users
        </h1>
        {this.allUserButton()}

        <input
          type="text"
          id="user-search"
          ref={(input) => { this.nameInput = input; }}
          onChange={this.filterUsers()}
          placeholder="Search for a user"

          />


        <ul id="user-index">
          {
            this.state.users.map((user) => (
              <UserIndexItem
                key={user.id}
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
