import { connect } from "react-redux";
import SkillIndex from "./skills_index";
import { fetchSkills, fetchSkill, createSkill, endorseSkill } from "../../actions/skills_actions";
import { fetchUsers } from "../../actions/users_actions";

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
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillIndex)
