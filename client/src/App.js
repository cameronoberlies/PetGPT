import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from './pages/Main';
import Breed from './pages/Breed';
import Profile from './pages/Profile';
import Header from "./components/Header";
import Test from "./pages/Test";
import Signup from "./components/Signup";
import Login from "./components/Login";




function App () {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path ='/test' element={<Test/>} />
            <Route path ="/breed" element={<Breed/>} />
            <Route path ="/profile" element={<Profile/>} />
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;