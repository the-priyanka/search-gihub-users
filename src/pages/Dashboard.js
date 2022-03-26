import React, { useContext } from "react";
import { Info, Navbar, Repos, Search, User } from "../components";
import LoadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img
          src={LoadingImage}
          className="loading-img"
          alt="loading"
        />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
