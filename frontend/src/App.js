import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import MatchQuiz from './pages/MatchQuiz';
import SignUpLogin from './pages/SignUpLogin';
// other imports...

function App() {
  return (
    <Router>
      <div>
        {/* Navigation, Footer, and other components */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/quiz">
            <MatchQuiz />
          </Route>
          <Route path="/login">
            <SignUpLogin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
