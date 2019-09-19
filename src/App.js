import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./containers/MainHeader.js";

//#region Page Imports
import ChapterEditor from "./pages/ChapterEditor.js";
import LoginPage from "./pages/LoginPage.js";
//#endregion

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      stories: [],
      currentStory: { id: 1 },
      currentChapter: { id: 1 }
    };
  }

  isLoggedIn = () => {
    // this can be more robust later
    return this.state.current_user.username === "";
  };

  //#region CRUD
  getStories = () => {
    const fetchStr = `http://localhost:3000/users/1/stories/`;
    console.log(fetchStr);
    fetch(fetchStr)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ stories: json.data });
        console.log(json.data);
      });
  };
  //#endregion

  componentDidMount() {
    this.getStories();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <MainHeader
            current_user={this.state.currentUser}
            stories={this.state.stories}
          />
        </div>

        <ChapterEditor />
        {/* <LoginPage /> */}
      </div>
    );
  }
}

export default App;
