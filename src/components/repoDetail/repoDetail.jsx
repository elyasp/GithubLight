import React from "react";

export const repoDetail = (props) => {
  return (
    <div>
      <li key={item.id}>
        <a href={item.html_url} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </li>
    </div>
  );
};
