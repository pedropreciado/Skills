import React from "react";
import { Link } from "react-router-dom"
import SkillsIndexItem from "./skills_index_item";

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
          <h1>skills index</h1>
          {
            this.props.skills.map((skill) => (
              <SkillsIndexItem
                skill={skill}
                />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SkillsIndex;
