import React from "react";
import { Link, withRouter } from "react-router-dom"
import SkillsIndexItem from "../skills/skills_index_item";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.moreSkills = this.moreSkills.bind(this);
  }

  moreSkills() {
    if (this.props.user.skills.length <= 4) {
      return;
    } else {
      return (
        <div id="more-skills">
          <Link to={`/users/${this.props.user.id}`}
            id="link"
            >
          {
            `+ ${this.props.user.skills.length - 4} more`
          }
        </Link>
        </div>
      )

    }
  }

  render() {
    if (!this.props.user) {
      return (
        <h1>
          Loading...
        </h1>
      )
    }


    return (
      <div>
        <Link to={`/users/${this.props.user.id}`}
          id="user-name"
          >
          <div id="user-name">
              {`${this.props.user.username}`}<span>{"'s skills. > > >"}</span>

        </div>
      </Link>

        <div id="user-index-item-skills">
          {
            this.props.user.skills.map((skill) => (
              <div>
                <div id="endorsement">
                  {`${skill.endorsements}`}
                </div>
                <div id="skill-name">
                {
                `${skill.name}`
                }
              </div>
              </div>
            )).slice(0, 4)
          }
          {this.moreSkills()}
      </div>
      </div>
    )
  }
}

export default withRouter(UserIndexItem);
