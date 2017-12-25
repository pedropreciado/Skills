import React from "react";
import { Link } from "react-router-dom"
import SkillsIndexItem from "./skills_index_item";
import SkillsFormContainer from "./skills_form_container";


class SkillsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      delivered: false,
      added: false
    }

    this.addedSkill = this.addedSkill.bind(this);
  }

  componentWillMount() {
    this.props.fetchSkills(this.props.currentUser.id);
  }

  addedSkill() {
    this.setState({added: true})
  }

  render() {

    return (
      <div>
      <div className="skills-index-nav">
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
                fetchUser={this.props.fetchUser}
                unendorseSkill={this.props.unendorseSkill}
                endorseSkill={this.props.endorseSkill}
                history={this.props.history}
                addedSkill={this.addedSkill}
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
