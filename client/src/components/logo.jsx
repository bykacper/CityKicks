import React from "react";
import logo from '../assets/images/logo.png';

export default function Logo() {
    return (
        <section className="logo">
            <img src={logo} alt="city kicks logo" />
            <span> CityKicks </span>
        </section>
    )
}