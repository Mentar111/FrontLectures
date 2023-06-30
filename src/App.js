import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacts from "./Pages/Contacts";
import Lessons from "./Pages/Lessons";
import Courses from "./Pages/Courses";
import Card1 from "./Pages/Card1";
import Card2 from "./Pages/Card2";
import Card3 from "./Pages/Card3";

function App() {
    return (
        <>
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/lessons" element={<Lessons />} />
                    <Route path="/card1" element={<Card1 />} />
                    <Route path="/card2" element={<Card2 />} />
                    <Route path="/card3" element={<Card3 />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
