import React from "react";
import { Link, withRouter } from "react-router-dom";

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

  endorsers() {
    if (this.props.endorsers) {
      return (
        <div id="skill-endorsers">
          {
          this.props.endorsers.slice(0, 6).map((endorser) => (
            <Link
              key={Math.random() * 10}
              to={`/api/users/${endorser.id}`}
              id="link"
              >
            <div
              id="endorser-name">
              {`${endorser.username.slice(0, 1)}`}
            </div>
          </Link>
          ))

          }
        </div>
      )
      } else {
      return;
    }
    return;
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

    // if (this.props.history.location.pathname !== "/") {
    //   window.location.reload();
    // }
  }

  handleClick() {
    this.props.deleteSkill(this.props.skill.id)
  }

  deleteButtonHovered() {
    this.setState({containerDelete: true})
  }

  deleteButtonLeft() {
    this.setState({containerDelete: false})
  }

  render() {

    if (!this.props.skill.id) {
        return (
          <div id="endorsement">
            Loading...
          </div>
        )
      }

    let endorsementStyle = this.props.skill.current_user_endorsed ? "endorsement-grey" : "endorsement";
    // let containerStyle = this.state.containerDelete ? "skill-container-red" : "skill-container";

    let containerStyle = "skill-container";

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
      <div
        onClick={this.handleClick}
        onMouseEnter={this.deleteButtonHovered}
        onMouseLeave={this.deleteButtonLeft}
        id="delete-skill-button"
        >
        {"X"}
      </div>
    </div>
    )
  }
}

export default SkillsIndexItem
