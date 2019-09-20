import React from "react";
import ChapterSelectButton from '../components/ChapterSelectButton.js'

const ChapterSelect = props => {
  const renderChapters = () => {
    return props.chapters.map(chapter => {
      return (
        <ChapterSelectButton chapter={chapter} selectChapter={props.selectChapter}/>
      );
    });
  };


  const handleCreateNewChapter = () => {
    const handler = props.createChapter;
    handler("Chapter X", "");
  };
  return (
    <div className="col bg-info">
      <header>Chapter Select</header>
      <ul className="list-group w-50 text-center">
        {renderChapters()}
        <button className="list-group-item" onClick={handleCreateNewChapter}>
          New Chapter
        </button>
      </ul>
    </div>
  );
};

export default ChapterSelect;
