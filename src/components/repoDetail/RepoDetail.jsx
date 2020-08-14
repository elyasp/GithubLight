import React from "react";
import { CardWrap, RepoCard } from "./styles";

/**
 * This renders individual repository details, only being rendered if parent component has successfully fetched from API
 * @param {Object} props Contains endpoint information
 * @component
 */
export const RepoDetail = (props) => {
  return (
    <CardWrap>
      <a href={props.item.html_url} target="_blank" rel="noopener noreferrer">
        <RepoCard>
          <h2>{props.item.name}</h2>
          <p>{props.item.description || <em>No description...</em>}</p>
        </RepoCard>
      </a>
    </CardWrap>
  );
};
