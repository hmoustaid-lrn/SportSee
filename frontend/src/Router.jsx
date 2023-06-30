import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Header from './components/Header'


function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter basename="/SportSee">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/profil/:userId" />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default Router
