import React, { useEffect } from "react";
import { productsLoader } from "../assets/data/products";
import { useParams } from "react-router-dom";

export default function Products() {
    const { brand, model } = useParams();

    const { products } = productsLoader(brand, model);

    useEffect(() => {
        if(products)
            console.log(products)
    }, [products])

    return (
        <section className="products-list">
        { products.map(product => {
            return <ProductCard imagePath={product.imagePath} brand={product.brand} model={product.model} price={product.price} />
        })}
        </section>
    )
}

function ProductCard({ imagePath, brand, model, price }) {
    return (
        <div className="product-card">
            <img src = {imagePath} />
            <h1> {brand} </h1>
            <h3> {model} </h3>
            <h3> {price} </h3>
        </div>
    )
}