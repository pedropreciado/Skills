import { connect } from "react-redux";
import SkillIndex from "./skills_index";
import { fetchSkills, fetchSkill, createSkill, endorseSkill } from "../../actions/skills_actions";
import { fetchUsers, fetchUser } from "../../actions/users_actions";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
  let skills = Object.keys(state.skills).map((id) => state.skills[id])
  skills = skills.sort((a, b) => {
    return b.endorsements - a.endorsements
  })

  return {
    currentUser: state.session.currentUser,
    skills
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSkills: (id) => dispatch(fetchSkills(id)),
  fetchSkill: (id) => dispatch(fetchSkill(id)),
  createSkill: (skill) => dispatch(createSkill(skill)),
  endorseSkill: (endorsement) => dispatch(endorseSkill(endorsement)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  logout: () => dispatch(logout())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillIndex))
