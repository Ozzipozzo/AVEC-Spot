import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ArtistDetail from './components/ArtistDetail'
import LeftNavBar from './components/LeftNavBar';
import LoginPage from './components/LoginPage';
import AlbumTracks from './components/AlbumTracks';
import Login from './components/Login';


function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/artist_detail/:id">
            <ArtistDetail/>
          </Route>
          <Route path="/album_detail/:id">
            <AlbumTracks/>
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
