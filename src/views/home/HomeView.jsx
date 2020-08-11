import React, { useState, useEffect } from "react";
import { SearchWrap } from "./styles";
import { Repositories } from "../../components/repositories";

export const HomeView = () => {
  const [userName, setUserName] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  return (
    <SearchWrap>
      <form>
        <input
          type="text"
          placeholder="Search a Github User"
          onChange={handleChange}
          required
        />
        <button>Go</button>
      </form>
      <Repositories userName={userName} />
    </SearchWrap>
  );
};
