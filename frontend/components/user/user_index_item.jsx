import React from "react";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {
          this.props.user.username
        }
      </div>
    )
  }
}

export default UserIndexItem;
