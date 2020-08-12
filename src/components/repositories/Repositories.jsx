import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Repo, Intro, Back, MainWrap } from "./styles";

export const Repositories = (props) => {
  const [userData, setUserData] = useState();
  const [search, setSearch] = useState("");
  const [filteredRepos, setFilteredRepos] = useState();

  useEffect(() => {
    const userName = props.match.params.username;

    async function fetchData() {
      await axios(
        `https://api.github.com/users/${userName}/repos?page=1&per_page=100`
      )
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, [props.match.params]);

  useEffect(() => {
    setFilteredRepos(
      userData &&
        userData.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [search, userData]);

  return (
    <MainWrap>
      <div>
        <Back href="/">
          <p>⇜ Search another user</p>
        </Back>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul>
          {filteredRepos &&
            filteredRepos.map((item) => (
              <Repo key={item.id}>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </Repo>
            ))}
        </ul>
      </div>
    </MainWrap>
  );
};
