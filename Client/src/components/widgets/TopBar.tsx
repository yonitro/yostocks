import React, {
  useState,
  useCallback,
  useContext,
  useRef,
  useEffect,
} from "react";
import logo from "../../styles/images/yo-st-logo.png";
import SearchBar from "../widgets/SearchBar";
import MarketSummary from "../widgets/MarketSummary";
import ScripDetails from "../pages/ScripDetails";
import News from "../pages/News";
import { GlobalContext } from "../../context/GlobalContext";
import { Link, useNavigation } from "react-navi";

const TopBar = () => {
  const { searchScrip, singleScrip, pages } = useContext(GlobalContext);
  const [search, setsearch] = searchScrip;
  const [scrip, setScrip] = singleScrip;
  const [currentPage, setCurrentPage] = pages;
  const navigation = useNavigation();

  const goToLogin = async (event) => {
 
      navigation.navigate("/login");
    
  };
  const goToHome = async (event) => {
 
    navigation.navigate("/");
  
};
  return (
    <>
      <div className="header">
        <div className="top-links">
          <nav className="top-nav">
            <ul>
              <li>
                <a href="" onClick={goToHome}>
                  <i className="fas fa-home home-icon"></i>Home
                </a>
              </li>
              <li>
                <a href="#">Mail</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Entertainment</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">More...</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-header">
          <div className="yahoo-Main-logo">
            <img src={logo} alt="Yo Stocks" />
          </div>
          <SearchBar />
          <div className="btn-area">
           <i className="fas fa-bell bell-noti"></i>
            <a href="" className="signInbtn" onClick={goToLogin}>Sign In</a>
          </div>
        </div>
        <div className="bot-links">
          <nav className="bot-nav">
            <ul>
              <li>
                <a href="" onClick={goToHome}>Finance Home</a>
              </li>
              <li>
                <a href="#">Watchlists </a>
              </li>
              <li>
                <a href="#">My Portfolio</a>
              </li>
              <li>
                <a href="#">Screeners</a>
              </li>
              <li>
                <a href="#">Yahoo Finance Plus</a>
              </li>
              <li>
                <a href="#">Markets</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Personal Finance</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Industries</a>
              </li>
              <li>
                <a href="#">...</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="app-row">
        <MarketSummary />
      </div>
      {currentPage === "news" && <News />}
      {currentPage === "detailed" && <ScripDetails />}
    </>
  );
};

export default TopBar;
