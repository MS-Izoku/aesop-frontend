import React, { Component } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from "draft-js";
import DraftEditorToolbar from "./DraftEditorToolbar.js";
//import { parse } from "@babel/parser"; // not sure where that came from, might need it later
//import _ from "lodash";

export default class DraftEditor extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = editorState => this.setState({ editorState });
  }

  // #region richUtils
  //#region text-modification
  setBoldText = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  setItalicText = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  setUnderlineText = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };
  //#endregion

  //#region text-alignment
  setCenterAlignment = () => {};

  setLeftAlignment = () => {};

  setRightAlignment = () => {};
  //#endregion

  // #endregion

  //#region key-commands
  setBoldWithKey = () => {};

  setItalicWithKey = () => {};

  setUnderlineWithKey = () => {};

  setCenterAlignmentWithKey = () => {};

  setLeftAlignmentWithKey = () => {};

  setRightAlignmentWithKey = () => {};

  //#endregion

  //#region raw-text handling
  getRawText = () => {
    // this will be how the system gets input-text and makes it into a stringified object
    const rawObj = convertToRaw(this.state.editorState.getCurrentContent());
    return JSON.stringify(rawObj);
  };

  loadRawText = () => {
    // this will be how the system parses though a raw text object with styling
    let rawTextObj = "";
    fetch("http://localhost:3000/")
      .then(resp => resp.json())
      .then(json => {
        // get the json response and set the current content of the EditorState (state)
        // to the parsedJSON
        const parsedJSON = JSON.parse(rawTextObj);
        this.setState({ editorState: convertFromRaw(parsedJSON) });
      });
  };
  //#endregion

  // #region event handling
  handleSubmit = event => {
    console.log("This will handle POST requests");
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        // this is where the richTextObj goes
        // figure out how to send this to the backend
        // and what fields need to be done to complete this
      })
    })
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  //#endregion
  render() {
    return (
      <div id="draft-editor" className="col-lg-8 bg-danger px-0">
        <div className="w-100">

            <DraftEditorToolbar
              setBoldText={this.setBoldText}
              setItalicText={this.setItalicText}
              setUnderlineText={this.setUnderlineText}
            />
            <hr></hr>

            <div className="editorContainer">
              <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
            </div>

            <div className="container">
              <button onClick={this.getRawText} className="btn btn-info">
                GET RAW
              </button>
              <button onClick={this.handleSubmit} className="btn btn-info">
                Submit
              </button>
            </div>
        
        </div>
      </div>
    );
  }
}
