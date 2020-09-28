import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img src="https://www.ctvnews.ca/polopoly_fs/1.2542940.1443546099!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg" />
      </div>

      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
};

export default Home;
