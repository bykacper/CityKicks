import React from "react";
import Logo from "./logo";

export default function Header() {
    return (
        <header>
            <TopHeader />
            <BottomHeader />
        </header>
    )
}

function TopHeader() {
    return (
        <section className="top-header">
            <Logo />
            <Navigation />
            <Details />
        </section>
    )
}

function BottomHeader() {
    return (
        <section className="bottom-header">
            <h1> Najlepsza kolekcja butów! </h1>
            <p> Poznaj naszą różnorodną ofertę stylowych i wygodnych butów na każdą okazję. Od Nike po Timberlandy, mamy coś dla każdego! </p>
            <ButtonsBox />
        </section>
    )
}

function Navigation() {
    return (
        <ul>
            <li> Sklep </li>
            <li> O nas </li>
            <li> Kontakt </li>
        </ul>
    )
}

function Details() {
    return (
        <section className="details">
            <button> Dołącz do nas </button>
        </section>
    )
}

function ButtonsBox() {
    return (
        <div className="buttons-box">
            <button className="buttons_box-first"> Zobacz kolekcję </button>
            <button className="buttons_box-second"> Inne sklepy </button>
        </div>
    )
}