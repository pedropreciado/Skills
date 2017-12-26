import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/users_actions";
import { fetchSkill, endorseSkill, unendorseSkill } from "../../actions/skills_actions";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
  let user = state.users[ownProps.match.params.userId]

  let skills = !!user ? user.skills : []

  skills = skills.sort((a, b) => {
    return b.endorsements - a.endorsements
  })

  return {
    user,
    skills,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    endorseSkill: (endorsement) => dispatch(endorseSkill(endorsement)),
    unendorseSkill: (id) => dispatch(unendorseSkill(id)),
    fetchSkills: () => dispatch(fetchSkills()),
    fetchSkill: (id) => dispatch(fetchSkill(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
