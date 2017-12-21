import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  update(key) {
    return (event) => {
      this.setState({[key]: event.target.value})
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({errors: [newProps.errors]})
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push("/posts"));
  }

  errors() {
    return (
      <ul>
        {
          this.props.errors.map((errors) => (
            <li className="errors">{errors}</li>
          ))
        }
      </ul>
    )
  }

  email_field() {
    if (this.props.formType == "signup") {
      return (
        <label>
          <input type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="email"
            />
        </label>
      )
    }
  }

  clearField(key) {
    return { [key]: "" }
  }

  passwordText() {
    if (this.state.password == "password") {
      return "text";
    } else {
      return "password"
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            session form
          </h1>
        </div>
      </div>
    )
  }
}
export default withRouter(SessionForm);
