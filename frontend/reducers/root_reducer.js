import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors_reducer";
import SkillsReducer from "./skills_reducer";

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  skills: SkillsReducer
})
