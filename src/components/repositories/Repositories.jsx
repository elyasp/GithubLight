import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchWrap } from "./styles";

export const Repositories = (props) => {
  const [userData, setUserData] = useState();

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://hn.algolia.com/api/v1/search?query=redux',
  //   );

  //   setData(result.data);
  // });

  useEffect(() => {
    async function fetchData() {
      await axios(`https://api.github.com/users/${props.userName}/repos`).then(
        (response) => {
          setUserData(response.data);
        }
      );
    }
    fetchData();
  }, [props.userName]);

  // const handleFetch = async (e) => {
  //   e.preventDefault();
  //   await axios(`https://api.github.com/users/${props.userName}/repos`).then(
  //     (response) => {
  //       setUserData(response.data);
  //     }
  //   );
  // };

  return (
    <SearchWrap>
      {userData && (
        <ul>
          {userData.map((item) => (
            <li key={item.id}>
              <a href={item.html_url}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </SearchWrap>
  );
};
