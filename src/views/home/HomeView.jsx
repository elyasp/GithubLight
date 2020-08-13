import React, { useState } from "react";
import { SearchForm, HomeWrap, Intro } from "./styles";

export const HomeView = () => {
  const [userName, setUserName] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
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
