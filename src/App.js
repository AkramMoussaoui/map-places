import "./App.css";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
