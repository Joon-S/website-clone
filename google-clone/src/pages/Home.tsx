import React from 'react';
import { Link } from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./Home.css";
import Search from "../components/Search";

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="about">about</Link>
                    <Link to="store">store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="gmail">gmail</Link>
                    <Link to="images">images</Link>
                    <AppIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="home__inputContainer">
                    <Search hideButtons={false}/>
                </div>
            </div>
        </div>
    )
};

export default Home;
