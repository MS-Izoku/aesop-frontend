import React, { Component } from "react";
import EditorCharacterList from '../components/EditorCharacterList'
import EditorFootnoteList from '../components/EditorFootnoteList'

export default class LeftBar extends Component {

  // smooth scroll to the first instance of using a character in a piece, or maybe the last
  // NYI
  scrollToTarget = (target , options={behavior: 'smooth'}) =>{
    // options can have things like smooth-scrolling
    const pos = target.offset()
    options = {pos , ...options}
    window.scrollTo(options)
  }

  render() {
    return (
      <div className="bg-info col-lg-2">
        <EditorCharacterList scrollToTarget={this.scrollToTarget}/>
        <EditorFootnoteList />
      </div>
    );
  }
}
