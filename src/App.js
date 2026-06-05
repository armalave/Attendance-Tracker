import About from './about';
import './App.css';
import Contact from './contact';
import Courses from './courses';
import Home from './home';
import Navbar from './navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h2>WELCOME user</h2><hr />
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
