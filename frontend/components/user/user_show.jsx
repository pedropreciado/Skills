import React from "react";
import SkillsIndexItem from "../skills/skills_index_item";
import SkillsFormContainer from "../skills/skills_form_container";

class UserShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userNotFound: false,
      addedSkill: false
    }

    this.addedSkill = this.addedSkill.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
    this.props.fetchUser(this.props.location.pathname.slice(-1));
    console.log(this.props.location.pathname.slice(-1))
  }

  addedSkill() {
    this.setState({added: true})
  }


  render() {
    console.log(this.props);

    console.log(!!this.props.user);
    if (!this.props.user) {
      return (
        <h1>
          Loading...
        </h1>
      )
    }

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
                addedSkill={this.addedSkill}
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
  }
}

export default UserShow
