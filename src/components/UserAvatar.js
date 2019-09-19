import React from "react";

const UserAvatar = props => {
  return (
    <span className="bg-warning">
      <div className="row">
        <h2 className="">{props.current_user.username}</h2>
        <img className="" src={props.current_user.avatar} className="userAvatar" />
      </div>
    </span>
  );
};

export default UserAvatar;
