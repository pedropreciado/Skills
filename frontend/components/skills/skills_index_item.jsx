import React from "react";
import { Link, withRouter } from "react-router-dom";

class SkillsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("proops", props.skill);

    this.endorsable = this.endorsable.bind(this);
  }

  endorsable() {
    event.preventDefault();
    if (!this.props.skill.current_user_endorsed) {
      this.props.endorseSkill({
        skill_id: this.props.skill.id,
        receiver_id: this.props.skill.user.id
      });
    }

    this.props.fetchSkill(this.props.skill.id);
  }

  render() {
    return (
       <div>
         <div onClick={this.endorsable}>
        {
          this.props.skill.name
        }
        {
          this.props.skill.endorsements
        }
        </div>
    </div>
    )
  }
}

export default SkillsIndexItem
