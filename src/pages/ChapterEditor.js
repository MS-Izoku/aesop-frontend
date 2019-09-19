import React from "react";
import DraftEditor from "../DraftEditor/DraftEditor.js";
import DraftEditorSideBar from "../containers/DraftEditorSideBar.js";
import MainHeader from "../containers/MainHeader.js";
import LeftBar from "../containers/LeftBar.js";

function ChapterEditor() {
  return (
    <div className="ChapterEditor">


        <div className="row">
          <DraftEditorSideBar />
          <DraftEditor />
          <LeftBar />
        </div>
      </div>

  );
}

export default ChapterEditor;