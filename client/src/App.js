import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from './pages/Main';
import Breed from './pages/Breed';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';


function App () {
    return (
        <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path ="/breed" element={<Breed/>} />
            <Route path ="/profile" element={<Profile/>} />
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;