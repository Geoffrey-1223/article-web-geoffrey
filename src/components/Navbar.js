import React from "react";
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';

import "../css/Navbar.css";

function Navbar(props) {
  const {
    articleDetailPage,
    isArticleListPage,
  } = props;
  return (
    <header className="top-area">
    <div className="header-area">
      <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                      <i className="fa fa-bars"></i>
                  </button>
              </div>

              {(isArticleListPage && !articleDetailPage) ? (
          
          <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
            <li className="smooth-menu">
              <Link to="/homePage">
                Home Page
              </Link>
            </li>
          </ul>
        </div>
                ): (
                  <>
                  {(!isArticleListPage && !articleDetailPage ) && (
                          <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                          <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                          <li className=" smooth-menu active"></li>
                              <li className=" smooth-menu"><a href="#home">Home Page</a></li>
                              <li className=" smooth-menu"><a href="#aboutUs">About Us</a></li>
                              <li className="smooth-menu"><a href="#feature">Core Feature</a></li>
                              <li className="smooth-menu"><a href="#interestTopic">Interest Topic</a></li>
                          </ul>
                        </div>
                  )}
                  </>
                )}
          </div>
      </nav>
    </div>

    <div className="clearfix"></div>

  </header>
  );
}
Navbar.propTypes = {
  articleDetailPage: PropTypes.bool,
  isArticleListPage: PropTypes.bool,
};
export default Navbar;
