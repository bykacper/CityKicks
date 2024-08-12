import React from "react";
import picture from '../assets/images/newsletter-picture.png'

export default function Newsletter() {
    return (
        <section className="newsletter">
            <Details />
            <img src={picture} alt="newsletter picture" />
        </section>
    )
}

function Details() {
    return (
        <div className="newsletter-details">
            <h1> Śledź najnowsze trendy obuwnicze </h1>
            <p> Zasubskrybuj nasz newsletter i dostawaj powiadomienia o najnowszych zniżkach i ofertach! </p>
            <button> Subskrybuj </button>
        </div>
    )
}