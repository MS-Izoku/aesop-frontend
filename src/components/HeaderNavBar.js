import React from "react";
const HeaderNavBar = props => {
  const renderStoryDropDown = () => {
    if (props.stories.length !== 0)
      return props.stories.map(story => {
        // the link needs to go to the show-page for the story
        console.log(story);
        return (
          <div>
            <a className="dropdown-item text-center" href="#">
              {story.attributes.title}
            </a>
            <div className="dropdown-divider"></div>
          </div>
        );
      });
  };
  return (
    <div className="navbar-nav">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Your Stories
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item text-center" href="#">
          Story Home
        </a>
        <div className="dropdown-divider"></div>
        {renderStoryDropDown()}
      </div>
    </div>
  );
};

export default HeaderNavBar;
