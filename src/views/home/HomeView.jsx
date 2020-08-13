import React, { useState } from "react";
import { SearchForm, HomeWrap, Intro } from "./styles";
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
      <Intro>Find Repositories.</Intro>
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
