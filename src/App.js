import React from "react";
import classes from "./App.css"
import Header from "./Components/Header/Header"
import History from "./Components/History/History"
import Footer from "./Components/Footer/Footer"
import Main from "./Components/Main/Main"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


const App = function () {
    return(
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/history' element={<History />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </div>
        </BrowserRouter>
    );
}

export default App;
