import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter basename="/SportSee">
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/profil/:userId" />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default Router
