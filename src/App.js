import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import SearchTravel from "./components/SearchTravel";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/travel" element={<SearchTravel />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
