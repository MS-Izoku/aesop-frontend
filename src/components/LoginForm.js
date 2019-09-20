import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log("Handling Submission");
    // handle the fetch to the login page here
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container-fluid bg-info p-2 w-25">
        <form
          id="loginForm"
          onSubmit={this.handleSubmit}
          className="form-group"
        >
          <label for="username-input">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="form-control"
            id="username-input"
            onChange={this.handleChange}
          ></input>

          <label for="password-input">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="form-control"
            id="password-input"
            onChange={this.handleChange}
          ></input>

          <div className="text-center">
            <input type="submit" name="submit" className="btn btn-dark"></input>
          </div>
        </form>
      </div>
    );
  }
}
