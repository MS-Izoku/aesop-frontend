import React from "react";

const ChapterSelectButton = props => {
  const handleSelectChapter = () => {
    const handler = props.selectChapter;
    handler(props.chapter);
  };
  return (
    <li
      className="list-group-item"
      onClick={handleSelectChapter}
      key={props.chapter.id === undefined ? 0 : props.chapter.id}
    >
      {props.chapter.title}
    </li>
  );
};

export default ChapterSelectButton;
