import styled, { css } from "styled-components";

const LayeredTextShadow = css`
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
    0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-height: 100vh;
`;

export const Title = styled.div`
  font-size: 7rem;
  margin: 0;
  ${LayeredTextShadow}
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  margin: 0;
  ${LayeredTextShadow}
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  ${LayeredTextShadow}

  input {
    outline: none;
    font-size: 2em;
    height: 50px;
    margin: 1em 0;
    padding: 0 1em;
    border: solid 2px #3f8f7c;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  button {
    height: 54px;
    font-size: 25px;
    background-color: #3f8f7c;
    color: white;
    border: none;
    padding: 0 1em;
    cursor: pointer;
    transition: 300ms;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    &:hover {
      background-color: #2c6356;
    }
  }
`;
