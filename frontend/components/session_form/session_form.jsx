import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
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
    this.props.action(this.state).then(() => this.props.history.push("/"));
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
          <NavBarContainer/>
          <form onSubmit={this.handleSubmit}>

            <h1>
              {
                this.props.formType
              }
            </h1>

              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="username"
                />

                <input
                  type={this.passwordText()}
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="password"
                  />
                  <div className="submit-buttons">

               <input
                 type="submit"
                 className="submit"
                 value={this.props.formType}/>
             </ div>
          </form>
        </div>
      </div>
    )
  }
}
export default withRouter(SessionForm);
