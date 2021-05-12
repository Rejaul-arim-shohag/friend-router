import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Detail from './components/Deatil/Detail';

function App() {
  
  return (
    <Router>
      <Switch>
      <Route path="/home">
          <Home/>
        </Route>
      <Route path="/friend/:friendId">
          <Detail></Detail>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
