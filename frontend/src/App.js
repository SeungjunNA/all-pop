import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import SignPage from './pages/SignPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Route path="/" exact={true} component={HomePage}></Route>
      <Route path="/login" exact={true} component={LoginPage}></Route>
      <Route path="/map" exact={true} component={MapPage}></Route>
      <Route path="/sign" exact={true} component={SignPage}></Route>
    </div>
  );
}

export default App;