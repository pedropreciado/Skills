import { connect } from "react-redux";
import { fetchUser } from "../../actions/users_actions";
import { endorseSkill } from "../../actions/skills_actions";
import UserShow from "./user_show";

const mapStateToProps = (state) => {
  return {
    user: state.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser,
    skills: state.skills
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    endorseSkill: (endorsement) => dispatch(endorseSkill(endorsement))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
