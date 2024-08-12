import React from "react";
import offer1 from '../assets/images/offer-1-card.png';
import offer2 from '../assets/images/offer-2-card.png';
import offer3 from '../assets/images/offer-3-card.png';
import offer4 from '../assets/images/offer-4-card.png';

export default function Offer() {
    return (
        <section className="offer">
            <h1> Poznaj naszą ofertę </h1>
            <span> Poznaj naszą stylową kolekcję butów na każdą okazję. Jakość, wygoda i moda w każdej parze. Kup teraz! </span>
            <div>
                <Card path={offer1} title={"Nowości"} text={"Poznaj nowe style"} />
                <Card path={offer2} title={"Specjalna oferta"} text={"Eksluzywne oferty"} />
                <Card path={offer3} title={"Wyprzedaż"} text={"Dobre ceny"} />
                <Card path={offer4} title={"Bestsellery"} text={"Najpopularniejsze"} />
            </div>
        </section>
    )
}

function Card({ path, title, text }) {
    return (
        <section className="offer-card">
            <img src={path} alt={title} />
            <h2> {title} </h2>
            <span> {text} </span>
            <button> Odkryj </button>
        </section>
    )
}