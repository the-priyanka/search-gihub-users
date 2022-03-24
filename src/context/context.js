import React, { useEffect, useState } from "react";
import axios from "axios";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

// Provider, Consumer - GithubContext.Provider

const GithubProvider = (props) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // Request loading
  const [requests, setRequests] = useState(0);
  const [setLoading, setSetLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: "" });

  // check rate
  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        remaining = 0;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(
            true,
            "sorry, you have exeeded your hourly rate limit!"
          );
        }
      })
      .catch((err) => console.log(err));
  };
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  // error
  useEffect(checkRequest, []);

  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, requests, error }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
