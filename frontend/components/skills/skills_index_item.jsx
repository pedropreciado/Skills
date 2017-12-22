import React from "react";
import { Link, withRouter } from "react-router-dom";

const SkillsIndexItem = (props) => {
  return (
    <div>
      <div>
        {
          props.skill.name
        }
        {
          props.skill.endorsements
        }
      </div>
    </div>
  )
}

export default SkillsIndexItem
