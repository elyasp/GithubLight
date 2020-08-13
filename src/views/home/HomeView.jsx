import React, { useState } from "react";
import { SearchForm, HomeWrap, Title, SubTitle } from "./styles";
import Zoom from "react-reveal/Zoom";

/**
 * This component renders the homepage
 * and redirects to the appropriate userpage after a search is made.
 * @component
 */

export const HomeView = () => {
  const [userName, setUserName] = useState();

  /**
   * Takes an event object and sets the value therein to the statehook, to be used for redirection
   * @param {Object} event Contains the search to the Github user
   */
  const handleChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  return (
    <HomeWrap>
      <Title>Github Light</Title>
      <SubTitle>Find Repositories. Just Repositories.</SubTitle>
      <Zoom>
        <SearchForm action={`/repositories/${userName}`}>
          <input
            type="text"
            placeholder="type a GitHub user"
            onChange={handleChange}
            required
          />
          <button>Search</button>
        </SearchForm>
      </Zoom>
    </HomeWrap>
  );
};
