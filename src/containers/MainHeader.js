import React, { Component } from "react";
import UserAvatar from "../components/UserAvatar.js";
import HeaderNavBar from "../components/HeaderNavBar.js";
export default class MainHeader extends Component {
  render() {
    return (
      <span className="headerNavBar">
        <header className="navbar navbar-expand-lg navbar-light bg-dark">
          <h1 className="navbar-brand">AESOP</h1>
          
          <HeaderNavBar stories={this.props.stories}/>
          
          {/* <UserAvatar current_user={this.props.current_user} /> */}
        </header>
      </span>
    );
  }
}
