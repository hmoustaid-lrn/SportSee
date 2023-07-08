import React from "react";
import yogaIcon from "../../assets/yoga.svg";
import bikeIcon from "../../assets/bike.svg";
import swimmingIcon from "../../assets/swimming.svg";
import dumbbell from "../../assets/dumbbell.svg";
import "./index.css";

export default function SideBar() {

    return (
        <aside className="sidebar">
            <div className="sidebar-button-wrapper center">
                <button className="sidebar-button">
                    <img src={yogaIcon} alt="" className="sidebar-button-logo" />
                </button>
                <button className="sidebar-button">
                    <img src={swimmingIcon} alt="" className="sidebar-button-logo" />
                </button>
                <button className="sidebar-button">
                    <img src={bikeIcon} alt="" className="sidebar-button-logo" />
                </button>
                <button className="sidebar-button">
                    <img src={dumbbell} alt="" className="sidebar-button-logo" />
                </button>
            </div>
            <p className="copyright">Copyright, SportSee 2023</p>
        </aside>
    );
}
