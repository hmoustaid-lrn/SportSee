import React from "react";
import yogaIcon from "../../assets/yoga.svg";
import bikeIcon from "../../assets/bike.svg";
import swimmingIcon from "../../assets/swimming.svg";
import dumbbell from "../../assets/dumbbell.svg";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function SideBar() {

    return (
        <div class="container">
            <div class="nav">
                <div class="sports">
                    <NavLink to="#">
                        <img src={yogaIcon} alt="Yoga" />
                    </NavLink>
                    <NavLink to="#">
                        <img src={swimmingIcon} alt="Swimming" />
                    </NavLink>
                    <NavLink to="#">
                        <img src={bikeIcon} alt="Bike" />
                    </NavLink>
                    <NavLink to="#">
                        <img src={dumbbell} alt="Dumbbell" />
                    </NavLink>
                </div>
                <div class="copyright">Copyright, SportSee 2023</div>
            </div>
        </div>
    );
};
