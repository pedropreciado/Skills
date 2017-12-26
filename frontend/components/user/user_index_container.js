import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/users_actions";
import { fetchSkills } from "../../actions/skills_actions";
import UserIndex from "./user_index";

const mapStateToProps = (state) => {
  let skills = state.skills;

  return {
    users: Object.keys(state.users).map((id) => state.users[id]),
    currentUser: state.session.currentUser,
    skills
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchSkills: () => dispatch(fetchSkills())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex)
