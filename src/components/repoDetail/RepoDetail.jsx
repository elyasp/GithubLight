import React from "react";
import { List, RepoCard } from "./styles";

/**
 * This render individual repository details, only being rendered if parent component has successfully fetched from API
 * @param {Object} props Contains endpoint information
 * @component
 */
export const RepoDetail = (props) => {
  return (
    <List>
      <a href={props.item.html_url} target="_blank" rel="noopener noreferrer">
        <RepoCard>
          <h2>{props.item.name}</h2>
          <p>{props.item.description || <p>No description...</p>}</p>
        </RepoCard>
      </a>
    </List>
  );
};
