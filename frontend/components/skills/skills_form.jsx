import React from "react";
import merge from "lodash/merge";

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {
        name: "",
        user_id: props.currentUser.id
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createSkill(this.state.skill).then(() => this.props.history.push("/"))
    this.props.fetchSkills();
  }

  update() {
    return (event) => {
      console.log(event.target.value)
      event.preventDefault();
      this.setState({
        skill: merge({}, this.state.skill, {
        "name": event.target.value
      })
    })
  }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          >

          <input
            type="text"
            placeholder="Add new skill"
            onChange={this.update()}
            />

            <input
              type="submit"
              value="Add"/>
        </form>
      </div>
    )
  }

}
 export default SkillsForm;
