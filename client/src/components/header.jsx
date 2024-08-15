import React, { createRef, useEffect } from "react";
import Logo from "./logo";
import hamburgerButton from '../assets/images/hbutton.png'
import useStore from "../store";
import close from '../assets/images/close.png'

export default function Header() {
    return (
        <header>
            <TopHeader />
            <BottomHeader />
            <MobileMenu />
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
    const toogleMobileMenu = useStore((state) => state.toogleMobileMenu);

    const toogleMenu = () => {
        toogleMobileMenu();
    }

    return (
        <section className="details">
            <img src={hamburgerButton} className="hamburger-button" onClick={toogleMenu} alt="menu" />
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

function MobileMenu() {
    const mobileMenu = createRef(null);
    const isMenu = useStore((state) => state.isMobileMenu);
    const toogleMobileMenu = useStore((state) => state.toogleMobileMenu)

    useEffect(() => {
        if(isMenu)
            mobileMenu.current.style.left = "0px";
        else
            mobileMenu.current.style.left = "100vw";
    }, [isMenu])

    const toogleMenu = () => {
        toogleMobileMenu();
    }

    return (
        <div className="mobile-menu" ref={mobileMenu}> 
            <img src={close} className="close-pic" onClick={toogleMenu}/>
            <ul>
                <li> Sklep </li>
                <li> O nas </li>
                <li> Kontakt </li>
            </ul>
        </div>
    )
}
