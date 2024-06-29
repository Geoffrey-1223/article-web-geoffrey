import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import ArticlePage from './components/Article';
import ArticleDetailPage from './components/ArticlesDetail';
import "./css/App.css";
class App extends Component {


  render() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/homePage" component={HomePage} />
      <Route exact path="/articlePage" component={ArticlePage} />
      <Route exact path="/articleDetail" component={ArticleDetailPage} />
      </Switch>
    </Router>
  );
  }
}

export default App;
