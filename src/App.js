import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./containers/MainHeader.js";

//#region Page Imports
//import LoginPage from "./pages/LoginPage.js";

import RichTextEditor from "./RichTextEditor/RichTextEditor.js";
//#endregion

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {id: 1},
      stories: [{ title: "Story" }],
      chapters: [{ id: 1, title: "No Chapters" }],
      currentStory: { id: 1, chapters: [{ title: "No Chapters Found" }] },
      currentChapter: { id: 1 }
    };
  }

  isLoggedIn = () => {
    // this can be more robust later
    return this.state.current_user.username === "";
  };

  selectChapter = chapter => {
    console.log(chapter);
    this.setState({ currentChapter: chapter });
  };

  createChapter = (title, body) => {
    console.log("Creating New Chapter");
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}/stories/${this.state.currentStory.id}/chapters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    })
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        this.setState({
          currentStory: {
            ...this.state.currentStory,
            chapters: [...this.state.currentStory.chapters, json]
          }
        });
      });
  };

  //#region login
  loginUser = () => {
    fetch(`http://localhost:3000/users/`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
      });
  };
  //#endregion

  //#region CRUD
  getStories = () => {
    const fetchStr = `http://localhost:3000/users/1/stories/`;
    console.log(fetchStr);
    fetch(fetchStr)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          stories: json,
          currentStory: json[0],
          currentChapter: json[0].chapters[0]
        });
        console.log(json);
      });
  };
  //#endregion

  componentDidMount() {
    this.getStories();
  }

  componentDidUpdate() {
    // debugger
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
        <RichTextEditor
          chapters={this.state.currentStory.chapters}
          stories={this.state.stories}
          selectChapter={this.selectChapter}
          createChapter={this.createChapter}
        />
        {/* <LoginPage /> */}
      </div>
    );
  }
}

export default App;
