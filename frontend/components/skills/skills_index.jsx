import React from "react";
import { Link } from "react-router-dom"

class SkillsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("skill_index", this.props);
    return (
      <div>
        <ul>
          {
            this.props.skills.map((skill) => (
              <SkillIndexItem
                skill={skill}
                />
            ))
          }
        </ul>
      </div>
    )
  }
}
