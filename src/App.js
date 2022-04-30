import logo from './logo.svg';
import './App.css';
// add compoent in app one byone we routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

const App=()=> {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  </div>
);
}

export default App;