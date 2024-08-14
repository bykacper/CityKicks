import React from "react";
import Header from "../components/header";
import Offer from "../components/offer";
import Newsletter from "../components/newsletter";
import Opinions from "../components/opinions";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <Offer />
            <Newsletter />
            <Opinions />
            <Footer />
        </>
    )
}