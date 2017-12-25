import React from "react";
import { Link, withRouter } from "react-router-dom"
import SkillsIndexItem from "../skills/skills_index_item";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
          <div>
            <Link to={`/users/${this.props.user.id}`}>
              {this.props.user.username}
            </Link>
        </div>

        <ul>
          <li>
          {
            this.props.user.skills.map((skill) => (
              <li>
                { `${skill.name} ${skill.endorsements}` }
              </li>
            ))
          }
        </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(UserIndexItem);
