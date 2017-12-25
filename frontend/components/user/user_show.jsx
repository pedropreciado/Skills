import React from "react";
import SkillsIndexItem from "../skills/skills_index_item";

class UserShow extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    
    return (
      <div>
        <h1>
          {
            this.props.user.username
          }
        </h1>

        <ul>
          {
            this.props.user.skills.map((skill) => (
              <SkillsIndexItem
                skill={skill}
                fetchSkill={this.props.fetchSkill}
                endorseSkill={this.props.endorseSkill}
                />
            ))
          }
        </ul>

      </div>
    )
  }
}

export default UserShow
