import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/users_actions";
import { fetchSkill, endorseSkill } from "../../actions/skills_actions";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
  let user = state.users[ownProps.match.params.userId]

  user = user ? user : {username: "", id: "", skills: []}

  return {
    user,
    skills: user.skills,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    endorseSkill: (endorsement) => dispatch(endorseSkill(endorsement)),
    fetchSkills: () => dispatch(fetchSkills()),
    fetchSkill: (id) => dispatch(fetchSkill(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
