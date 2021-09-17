import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Artists from './components/ArtistsCard'
import LeftNavBar from './components/LeftNavBar';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <>
    <Router>
    <LeftNavBar/>
        <Switch>
          <Route path="/artists">
            <Artists/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
