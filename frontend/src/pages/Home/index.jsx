import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

export default function Home() {

    return (
        <main>
            <h2 class="tilte">USERS:</h2>
            <NavLink to="profil/12">👦 Karl </NavLink>
            <NavLink to="profil/18">👩 Cecilia </NavLink>
        </main>
    );
};