import React from "react";
import { Link } from "react-router-dom"
import SkillsIndexItem from "./skills_index_item";
import SkillsFormContainer from "./skills_form_container";


class SkillsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSkills();
  }

  render() {
    return (
      <div>
      <div className="skills-index-nav-buttons">
        <h1>{this.props.currentUser.username}</h1>
        <Link to="/users">
          <button>All Users</button>
        </Link>
        <button onClick={this.props.logout}>
          Logout
        </button>
      </div>

        <ul className="skills-index-ul">
          {
            this.props.skills.map((skill) => (
              <SkillsIndexItem
                skill={skill}
                fetchSkill={this.props.fetchSkill}
                endorseSkill={this.props.endorseSkill}
                />
            ))
          }
        </ul>
        
        <SkillsFormContainer
          user={this.props.currentUser}
          fetchSkills={this.props.fetchSkills}
          flavor={"currentUserIndex"}
          />
      </div>
    )
  }
}

export default SkillsIndex;
