import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Upload from './pages/Upload';
import Download from './pages/Download';
import FileNotFound from './pages/FileNotFound';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/upload" />
        </Route>
        <Route path="/upload" component={Upload} />
        <Route path="/download" component={Download} />
        <Route component={FileNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
