import React from "react";
const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

// Provider, Consumer - GithubContext.Provider

const GithubProvider = (props) => {
  return (
    <GithubContext.Provider value={"hello"}>
      {props.children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
