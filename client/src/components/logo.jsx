import React from "react";
import logo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const naviation = useNavigate();

    const handleRedirect = () => {
        naviation('/');
    }

    return (
        <section className="logo" onClick={handleRedirect}>
            <img src={logo} alt="city kicks logo" />
            <span> CityKicks </span>
        </section>
    )
}