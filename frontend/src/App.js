import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MatchQuiz from './pages/MatchQuiz';
import SignUpLogin from './pages/SignUpLogin';
// other imports...

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/quiz" component={MatchQuiz} />
        <Route path="/login" component={SignUpLogin} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
