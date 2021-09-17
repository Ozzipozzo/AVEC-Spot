import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Artists from './components/Artists'
import LeftNavBar from './components/LeftNavBar';


function App() {
  return (
    <>
    <Router>
    <LeftNavBar/>
        <Switch>
          <Route path="/artists">
            <Artists/>
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
