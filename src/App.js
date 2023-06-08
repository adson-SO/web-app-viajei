import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import RegisterTravel from "./components/RegisterTravel";
import SearchTravel from './components/SearchTravel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register/travel' element={<RegisterTravel />} />
        <Route path='/search/travel' element={<SearchTravel />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;