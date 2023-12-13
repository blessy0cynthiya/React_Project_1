import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
   /* <div className="App">
      <Login/>
    </div>*/
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
