import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/users_actions";
import merge from "lodash/merge";

const UsersReducer = (oldSatte = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      let newState = merge({}, oldState, {[action.user.id]: action.user})
      return newState;
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    default:
      return oldState;
  }
};

export default UsersReducer;
