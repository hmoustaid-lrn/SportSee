import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

export default function Home() {

    return (
        <main>
            <h2 className="tilte">USERS:</h2>
            <NavLink to="user/12">👦 Karl </NavLink>
            <NavLink to="user/18">👩 Cecilia </NavLink>
        </main>
    );
};