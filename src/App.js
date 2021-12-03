import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/header" component={Header} />
          <Route path="/" component={Home} />
        </Routes>
      </Router>
      <Header />
      <Home />
    </div>
  );
}

export default App;
