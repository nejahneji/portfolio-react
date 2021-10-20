import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/work' component={Work} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
