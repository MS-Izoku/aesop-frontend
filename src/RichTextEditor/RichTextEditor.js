import React, { Component } from "react";

import ChapterSelect from "./ChapterSelect.js";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: { id: 1 },
      data: "",
      editor: ""
    };
  }

  handleSaveChapter = () => {
    fetch("http://localhost:3000/users/1/stories/1/chapters/11", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: {
        data: {
          attributes: {
            body: this.state.editor.getData()
          }
        }
      }
    })
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  render() {
    console.log(this.props);
    return (
      <div className="container-fluid stretchWidth">
        <div className="row">
          <ChapterSelect
            chapters={this.props.chapters}
            selectChapter={this.props.selectChapter}
            createChapter={this.props.createChapter}
          />
          <div className="row">
            <CKEditor
              editor={ClassicEditor}
              data={this.state.data}
              onInit={editor => {
                this.setState({ editor });
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <div className="col bg-warning"></div>
        </div>

        <button onClick={this.handleSaveChapter}>Debugger</button>
      </div>
    );
  }
}
