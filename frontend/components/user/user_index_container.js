import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/users_actions";
import UserIndex from "./user_index";

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    users: Object.keys(state.users).map((id) => state.users[id]),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex)
