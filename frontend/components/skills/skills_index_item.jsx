import React from "react";
import { Link, withRouter } from "react-router-dom";

let count = 0;

class SkillsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.endorsable = this.endorsable.bind(this);

    this.state = {
      addedSkill: false,
      containerDelete: false
    }
    this.endorsers = this.endorsers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteButtonHovered = this.deleteButtonHovered.bind(this);
    this.deleteButtonLeft = this.deleteButtonLeft.bind(this);
  }

  componentDidMount() {
    if (!this.props.skill.id) {
      this.forceUpdate();
    }
  }

  endorsers() {
    if (this.props.endorsers) {
      return (
        <div id="skill-endorsers">
          {
          this.props.endorsers.slice(0, 6).map((endorser) => (
            <div
              id="endorser-name">
              {`${endorser.username.slice(0, 1)}`}
            </div>
          ))

          }
        </div>
      )
      } else {
      return;
    }
  }


  endorsable() {
    event.preventDefault();
    if (!this.props.skill.current_user_endorsed) {

      this.props.endorseSkill({
        skill_id: this.props.skill.id,
        receiver_id: this.props.skill.user.id
      });
    } else {
      this.props.unendorseSkill({
        skill_id: this.props.skill.id
      });
    }

    this.props.fetchUser(this.props.skill.user.id);
  }

  deleteable() {
    if (this.props.flavor === "userShow") {
      return (
        <a></a>
      )
    } else {
      return (
        <div
          key={Math.random() * 1000}
          onClick={this.handleClick}
          onMouseEnter={this.deleteButtonHovered}
          onMouseLeave={this.deleteButtonLeft}
          id="delete-skill-button"
          >
          {"X"}
        </div>
      )
    }

  }

  handleClick() {
    this.props.deleteSkill(this.props.skill.id);
  }

  deleteButtonHovered() {
    this.setState({containerDelete: true});
  }

  deleteButtonLeft() {
    this.setState({containerDelete: false});
  }


  render() {
    let endorsementStyle = this.props.skill.current_user_endorsed ? "endorsement-grey" : "endorsement"
    // let containerStyle = this.state.containerDelete ? "skill-container-red" : "skill-container";

    let containerStyle = "skill-container";

    if (!this.props.skill.id) {
      setTimeout(() => {
        return;
      }, 2000)
    }

    return (
       <div id={containerStyle}>
          <div
           onClick={this.endorsable}
           id="skills-index-item"
           >

           <div id="test">

             <div id={endorsementStyle}>
               {
                 this.props.skill.endorsements
               }
             </div>
            <div id="skill-name">
               {
                 this.props.skill.name
               }
             </div>
           </div>

      </div>

      {this.endorsers()}
      {this.deleteable()}

    </div>
    )
  }
}

export default SkillsIndexItem

// <Link
//   key={Math.random() * 10}
//   to={`/api/users/${endorser.id}`}
//   id="link"
//   >
