import React from "react";
import avatar from "../assets/images/author's-avatar.png";

export default function Opinions() {
    const text = "Zakupy w City Kicks to czysta przyjemność. Mają naprawdę imponujący asortyment butów – od klasycznych sneakersów po najnowsze modele od topowych marek. Plus za szybkie realizowanie zamówień. Na pewno będę wracać!";
    return (
        <section className="opinions">
            <h1> Opinie naszych klientów </h1>
            <div>
                <Opinion path={avatar} content={text} author={"Sylwester, lokalny klient"} />
                <Opinion path={avatar} content={text} author={"Sylwester, lokalny klient"} />
                <Opinion path={avatar} content={text} author={"Sylwester, lokalny klient"} />
                <Opinion path={avatar} content={text} author={"Sylwester, lokalny klient"} />
            </div>
        </section>
    )
}

function Opinion({ path, content, author }) {
    return (
        <section className="opinion-card">
            <img src={path} alt="author's avatar" />
            <p> {content} </p>
            <span> {author} </span>
        </section>
    )
} 