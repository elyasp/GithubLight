import styled from "styled-components";

export const MainWrap = styled.div``;

export const Repo = styled.li`
  list-style: none;
  max-width: fit-content;

  a {
    text-decoration-line: none;
  }
`;

export const Back = styled.a`
  text-decoration-line: none;

  p {
    font-size: 2rem;
    text-decoration: none;
    margin: 2em;
    color: black;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }
`;
