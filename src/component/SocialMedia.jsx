import React from "react";

function SocialMedia({ title, url, icon }) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" title={title} href={url}>
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default SocialMedia;
