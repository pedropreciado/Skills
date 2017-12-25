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
        <ul>
          <h1>Skills Index</h1>
          <Link to="/users">
            <button>All Users</button>
          </Link>
          <button onClick={this.props.logout}>
            Logout
          </button>
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
