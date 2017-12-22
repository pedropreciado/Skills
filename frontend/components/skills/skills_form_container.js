import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SkillsForm from "./skills_form";

import { fetchSkill, createSkill } from "../../actions/skills_actions";

const mapStatetoProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  return {
    currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSkill: (id) => dispatch(fetchSkill(id)),
    createSkill: (skill) => dispatch(createSkill(skill))
  }
}

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchToProps
)(SkillsForm));
