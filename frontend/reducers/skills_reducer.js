import { RECEIVE_ALL_SKILLS, RECEIVE_SKILL } from "../actions/skills_actions";
import merge from "lodash/merge";

const SkillsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SKILLS:
      return merge({}, action.skills);
    case RECEIVE_SKILL:
      return merge({}, oldState, {[action.skill.id]: action.skill})
    case REMOVE_SKILL:
      let newState = merge({}, oldState);
      delete newState[action.skill.id];
      return newState;
    default:
      return oldState;
  }
};

export default SkillsReducer;
