import { connect } from "react-redux";
import SkillIndex from "./skill_index";
import { fetchSkills, createSkill, endorseSkill } from "../../actions/skills_actions";

const mapStateToProps = (state) => {
  return {
    skills: Object.keys(state.skills).map((id) => state.skills[id]),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSkills: () => dispatch(fetchSkills()),
  createSkill: (skill) => dispatch(createSkill(skill)),
  endorseSkill: (id) => dispatch(endorseSkill(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillIndex)
