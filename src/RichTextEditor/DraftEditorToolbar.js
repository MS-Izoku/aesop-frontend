import React from "react";

const DraftEditorToolbar = props => {
  //console.log(props)
  const { setBoldText, setItalicText, setUnderlineText } = props;

  return (
    <div className={"draftEditorToolbar"}>
      <button className="btn btn-white m-1" onClick={setBoldText}>
        B
      </button>
      <button className="btn btn-white m-1" onClick={setItalicText}>
        I
      </button>
      <button className="btn btn-white m-1" onClick={setUnderlineText}>
        U
      </button>

      <button className="btn btn-white m-1" onClick={setBoldText}>
        LEFT
      </button>
      <button className="btn btn-white m-1" onClick={setBoldText}>
        CENTER
      </button>
      <button className="btn btn-white m-1" onClick={setBoldText}>
        RIGHT
      </button>
    </div>
  );
};

export default DraftEditorToolbar;
