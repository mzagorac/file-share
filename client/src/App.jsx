import { BrowserRouter as Router, Route } from 'react-router-dom';
import Upload from './pages/Upload';
import Download from './pages/Download';

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/upload" component={Upload} />
      <Route path="/download" component={Download} />
    </Router>
  );
}

export default App;
