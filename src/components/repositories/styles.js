import styled from "styled-components";

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 2em;
`;

export const Intro = styled.div`
  max-width: fit-content;
`;

export const Back = styled.a`
  button {
    text-decoration-line: none;
    position: fixed;
    max-width: fit-content;
    margin: 1em;
    cursor: pointer;
    padding: 10px;
    background-color: #141414;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 2rem;
    text-decoration: none;
    color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }
`;

export const Results = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-flow: row wrap;

  p {
    font-size: 2rem;
  }
`;

export const Searchbar = styled.input`
  outline: none;
  font-size: 2em;
  height: 50px;
  margin: 1em 0;
  padding: 0 1em;
  border: solid 2px #3f8f7c;
  border-radius: 10px;
`;

export const Title = styled.div`
  margin-top: 20px;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;
  text-decoration: none;
  color: black;

  img {
    max-width: 250px;
    border-radius: 250px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }

  p {
    font-size: 3rem;
    margin-top: 1em;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
      0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
  }
`;
