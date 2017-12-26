import React from "react";
import merge from "lodash/merge";

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);

    let flavor = this.props.flavor;

    let user_id = this.props.user.id;

    console.log(this.props);

    this.state = {
      flavor,
      skill: {
        name: "",
        user_id
      },
      formText: "Enter Name of Skill"

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.formText = this.formText.bind(this);
  }

  formText() {

    if (this.props.flavor === "userShow") {
      return (
        <h2>
          Recommend Skill for {this.props.user.username}
        </h2>
      )
    } else {
      return (
        <h2>
          Add a Skill
        </h2>
      )
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.createSkill(this.state.skill);

    this.props.fetchUser(this.props.user.id);

    // if (this.props.history.location.pathname !== "/") {
    //   window.location.reload();
    // }

  }

  update() {
    return (event) => {
      event.preventDefault();
      this.setState({
        skill: merge({}, this.state.skill, {
        "name": event.target.value
      }),
      formText: event.target.value
    })
  }
  }

  render() {

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          >

          { this.formText() }

          <input
            id="skill-input"
            type="text"
            placeholder={this.state.formText}
            onChange={this.update()}
            />

            <input
              type="submit"
              value="Add"
              id="submit-button"
              />
        </form>
      </div>
    )
  }

}
 export default SkillsForm;
