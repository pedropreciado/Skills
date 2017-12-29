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
        <h1>Hello, {this.props.currentUser.username}</h1>
      </div>

        <ul className="skills-index-ul">
          <div id="nav-buttons">
          <Link to="/users">
            <button>All Users</button>
          </Link>
          <button onClick={this.props.logout}>
            Logout
          </button>
        </div>
          <div id="top-six">
          {
            this.props.skills.slice(0, 5).map((skill) => (
              <SkillsIndexItem
                key={skill.id}
                skill={skill}
                fetchSkill={this.props.fetchSkill}
                deleteSkill={this.props.deleteSkill}
                fetchUser={this.props.fetchUser}
                unendorseSkill={this.props.unendorseSkill}
                endorseSkill={this.props.endorseSkill}
                history={this.props.history}
                addedSkill={this.addedSkill}
                endorsers={skill.endorsers}
                />
            ))

          }
        </div>
            <div id="other-skills">
            {
            this.props.skills.slice(5).map((skill) => (
              <SkillsIndexItem
                key={skill.id}
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
        </div>
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
