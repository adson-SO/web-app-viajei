import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import RegisterTravel from "./components/RegisterTravel";
import SearchTravel from './components/SearchTravel';
import Signup from './components/Signup';
import Travels from './components/Travels';
import SearchTravelResult from './components/SearchTravelsResult';
import TravelDetails from './components/TravelDetails';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/travel' element={<RegisterTravel />} />
        <Route path='/search/travel' element={<SearchTravel />} />
        <Route path='/travel' element={<Travels />} />
        <Route path='/travel/result' element={<SearchTravelResult />} />
        <Route path='/travel/details' element={<TravelDetails />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
