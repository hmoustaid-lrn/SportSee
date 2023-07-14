import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useParams } from 'react-router-dom'

import "./index.css";

export default function Header() {

    const { userId } = useParams();


    return (
        <header className="nav-wrapper">
            <Link to="/">
                <img
                    src={logo}
                    alt="SportSee Logo"
                    className="nav-logo vertical-center"
                />
            </Link>
            <nav className="nav vertical-center">
                <NavLink
                    className="nav-link"
                    to={`/`}
                >
                    Accueil
                </NavLink>
                <NavLink
                    className="nav-link"
                    to={`/`}
                >
                    Profil
                </NavLink>
                <NavLink
                    className="nav-link"
                    to="/settings"
                >
                    Réglage
                </NavLink>
                <NavLink
                    className="nav-link"
                    to="/community"
                >
                    Communauté
                </NavLink>
            </nav>
        </header>
    );
};