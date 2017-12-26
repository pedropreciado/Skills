import React from "react";
import { Link, withRouter } from "react-router-dom";

class SkillsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.endorsable = this.endorsable.bind(this);

    this.state = {
      addedSkill: false
    }
    this.endorsers = this.endorsers.bind(this);
  }

  endorsers() {
    if (this.props.endorsers) {
      return (
        <div id="skill-endorsers">
          {
          this.props.endorsers.slice(0, 6).map((endorser) => (
            <div id="endorser-name">
              <Link to={`/api/users/${endorser.id}`}
                id="link"
                >
              {`${endorser.username.slice(0, 1)}`}
            </Link>
            </div>
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

    if (this.props.history.location.pathname !== "/") {
      window.location.reload();
    }
  }

  render() {

    let endorsementStyle = this.props.skill.current_user_endorsed ? "endorsement-grey" : "endorsement"


    return (
       <div>
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

          {this.endorsers()}
      </div>
    </div>
    )
  }
}

export default SkillsIndexItem
