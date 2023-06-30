import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

import "./index.css";

export default function Header() {

    return (
        <header>
            <img src={logo} alt="sportSee" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="#">Profil</NavLink>
                <NavLink to="#">Réglages</NavLink>
                <NavLink to="#">Communauté</NavLink>
            </nav>
        </header>
    );
};