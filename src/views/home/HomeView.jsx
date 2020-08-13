import React, { useState } from "react";
import { SearchForm, HomeWrap, Intro } from "./styles";

/**
 * This component renders the homepage
 * and redirects to the appropriate userpage.
 * @component
 */

export const HomeView = () => {
  const [userName, setUserName] = useState();

  const handleChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  return (
    <HomeWrap>
      <Intro>Find Repositories.</Intro>
      <SearchForm action={`/repositories/${userName}`}>
        <input
          type="text"
          placeholder="type a GitHub user"
          onChange={handleChange}
          required
        />
        <button>Search</button>
      </SearchForm>
    </HomeWrap>
  );
};
