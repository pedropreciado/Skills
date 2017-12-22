import React from "react";
import { Link, withRouter } from "react-router-dom";

class SkillsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("proops", props.skill);
  }

  render() {
    return (
       <div>
      <div>
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
