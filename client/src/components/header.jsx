import React, { createRef, useEffect } from "react";
import Logo from "./logo";
import hamburgerButton from '../assets/images/hbutton.png'
import useStore from "../store";
import close from '../assets/images/close.png'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <TopHeader />
            <BottomHeader />
            <MobileMenu />
        </header>
    )
}

export function TopHeader() {
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
            <li className="shop-li"> <Link to = '/shop'> Sklep </Link>
                <ExpandedMenu />
            </li>
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
        if (isMenu)
            mobileMenu.current.style.left = "0px";
        else
            mobileMenu.current.style.left = "100vw";
    }, [isMenu])

    const toogleMenu = () => {
        toogleMobileMenu();
    }

    return (
        <div className="mobile-menu" ref={mobileMenu}>
            <img src={close} className="close-pic" onClick={toogleMenu} />
            <ul>
                <li> Sklep </li>
                <li> O nas </li>
                <li> Kontakt </li>
            </ul>
        </div>
    )
}

function ExpandedMenu() {
    return (
        <div className="expanded-menu">
            <table>
                <tr>
                    <td> 
                        <h3> <Link to = '/shop/nike'> Nike </Link> </h3>
                        <p> <Link to = '/shop/nike/airforce'> Air force </Link> </p>
                        <p> <Link to = '/shop/nike/airjordan'> Air jordan </Link> </p>
                        <p> <Link to = '/shop/nike/airmax'> Air max </Link> </p>
                        <p> <Link to = '/shop/nike/airhuarache'> Air Huarache </Link> </p>
                        <p> <Link to = '/shop/nike/dunk'> Nike Dunk </Link> </p>
                    </td>
                    <td> 
                        <h3> <Link to = '/shop/adidas'> Adidas </Link> </h3>
                        <p> <Link to = '/shop/adidas/campus'> Campus </Link> </p>
                        <p> <Link to = '/shop/adidas/yeezy'> Yeezy </Link> </p>
                        <p> <Link to = '/shop/adidas/samba'> Samba </Link> </p>
                        <p> <Link to = '/shop/adidas/gazelle'> Gazelle </Link> </p>
                        <p> <Link to = '/shop/addias/spezial'> Spezial </Link> </p>
                    </td>
                    <td> 
                        <h3> <Link to = '/shop/puma'> Puma </Link> </h3>
                        <p> <Link to = '/shop/puma/futurerider'> Future Rider </Link> </p>
                        <p> <Link to = '/shop/puma/calidream'> Cali dream </Link> </p>
                        <p> <Link to = '/shop/puma/kaia20'> Kaia 2.0 </Link> </p>
                        <p> <Link to = '/shop/puma/mayze'> Mayze </Link> </p>
                        <p> <Link to = '/shop/puma/capromid'> CA Pro Mid </Link></p>
                    </td>
                    <td>
                        <h3> New Balance </h3>
                        <p> WRPD RUNNER </p>
                        <p> 580 </p>
                        <p> 574 </p>
                        <p> 550 </p>
                        <p> 550 </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3> Converse </h3>
                        <p> Weapon </p>
                        <p> Run Star Trainer </p>
                        <p> Chuck Taylor </p>
                        <p> One Star Pro  </p>
                        <p> One star academy </p>
                    </td>
                    <td>
                        <h3> Vans </h3>
                        <p> Knu Skool </p>
                        <p> Classic </p>
                        <p> Speed LS </p>
                        <p> Rowley Classic</p>
                        <p> Canvas Authentic </p>
                    </td>
                    <td>
                        <h3> Reebok </h3>
                        <p> Club C Revange </p>
                        <p> Club C 85 Vintage </p>
                        <p> Club C 85 </p>
                        <p> Club C Grounds </p>
                        <p> Classic Leather </p>
                    </td>
                    <td>
                        <h3> Timberland </h3>
                        <p> TBL ORIG ULTR </p>
                        <p> ALDEN BROOK </p>
                        <p> GREENSTRIDE MOTION </p>
                        <p> CLASSIC BOAT </p>
                        <p> WINSOR TRAIL </p>
                    </td>
                </tr>
            </table>
        </div>
    )
}