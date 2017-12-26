import React from "react";
import SkillsIndexItem from "../skills/skills_index_item";
import SkillsFormContainer from "../skills/skills_form_container";
import { Link, withRouter } from "react-router";

class UserShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUsers();

  }

  render() {


    if (!!this.props.user) {
      return (
        <div>
          <h1 id="user-name">
            {
              this.props.user.username
            }
          </h1>

          <ul id="user-show">
            {
              this.props.user.skills.map((skill) => (
                <SkillsIndexItem
                  skill={skill}
                  fetchSkill={this.props.fetchSkill}
                  endorseSkill={this.props.endorseSkill}
                  unendorseSkill={this.props.unendorseSkill}
                  addedSkill={this.addedSkill}
                  fetchUser={this.props.fetchUser}
                  />
              ))
            }
          </ul>

          <SkillsFormContainer
            user={this.props.user}
            flavor={"userShow"}
            />

        </div>
      )

    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }

  }
}

export default withRouter(UserShow);
