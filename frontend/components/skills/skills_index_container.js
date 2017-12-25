import { connect } from "react-redux";
import SkillIndex from "./skills_index";
import { fetchSkills, fetchSkill, createSkill, endorseSkill } from "../../actions/skills_actions";
import { fetchUsers } from "../../actions/users_actions";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    skills: Object.keys(state.skills).map((id) => state.skills[id]),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSkills: () => dispatch(fetchSkills()),
  fetchSkill: (id) => dispatch(fetchSkill(id)),
  createSkill: (skill) => dispatch(createSkill(skill)),
  endorseSkill: (endorsement) => dispatch(endorseSkill(endorsement)),
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillIndex)
