import styled from "styled-components";

export const List = styled.div`
  a {
    text-decoration: none;
  }
`;

export const RepoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3c736b;
  width: 350px;
  height: 170px;
  margin: 1em;
  padding: 1em;
  color: white;
  border-radius: 4px;

  &:hover {
    background-color: #264a45;
  }

  h2 {
    text-decoration: none;
    font-size: 25px;
  }

  p {
    font-size: 15px;
    text-decoration: none;
  }
`;
