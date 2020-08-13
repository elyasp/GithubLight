import React, { useState, useEffect } from "react";
import axios from "axios";
import { Intro, Back, MainWrap, Results, Searchbar, Title } from "./styles";
import { RepoDetail } from "../repoDetail";
import { Fade, Zoom } from "react-reveal";

/**
 * This component fetches from the GitHub API upon mounting component using search entry from the route params in props.
 * Filters the rendered results from the fetched data by search and then returns a filtered Array.
 * @param {String} props Passed into route
 * @component
 */
export const Repositories = (props) => {
  const [userData, setUserData] = useState();
  const [search, setSearch] = useState("");
  const [filteredRepos, setFilteredRepos] = useState();
  const [userFound, setUserFound] = useState();

  useEffect(() => {
    const userName = props.match.params.username;

    async function fetchData() {
      await axios(
        `https://api.github.com/users/${userName}/repos?page=1&per_page=100`
      )
        .then((response) => {
          setUserData(response.data);
          setUserFound(true);
        })
        .catch((error) => {
          console.log(error);
          setUserFound(false);
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

  const profilePhoto = userData && userData[0].owner.avatar_url;
  const githubUser = userData && userData[0].owner.login;

  return (
    (userData && (
      <div>
        <MainWrap>
          <Intro>
            <Back href="/">
              <button>⇜ Back</button>
            </Back>
          </Intro>
          <Fade top>
            <Title>
              <img src={profilePhoto} alt="profilepic" />
              <p>{githubUser}</p>
            </Title>
          </Fade>
          <Zoom>
            <Searchbar
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Zoom>
          <Fade bottom>
            <Results>
              {filteredRepos &&
                filteredRepos.map((item) => <RepoDetail item={item} />)}
            </Results>
          </Fade>
        </MainWrap>
      </div>
    )) || (
      <Results>
        <p>Searching user...</p>
      </Results>
    )
  );
};
