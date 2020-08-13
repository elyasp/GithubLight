import React from "react";
import { List, RepoCard } from "./styles";

export const RepoDetail = (props) => {
  return (
    <List>
      <a href={props.item.html_url} target="_blank" rel="noopener noreferrer">
        <RepoCard>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
        </RepoCard>
      </a>
    </List>
  );
};
