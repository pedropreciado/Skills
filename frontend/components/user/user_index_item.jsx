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
        <ul>
          {
            this.props.user.skills.map((skill) => (
              <li>
                { `${skill.name} ${skill.endorsements}` }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default UserIndexItem;
