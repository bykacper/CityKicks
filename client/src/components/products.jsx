import React, { useEffect, useState } from "react";
import { productsLoader } from "../assets/data/products";
import { useNavigate, useParams } from "react-router-dom";
import models from "../assets/data/models";

export default function Products() {
    const { brand, model } = useParams();

    const { products } = productsLoader(brand, model);

    return (
        <div className="products-box">
            <ProductFilter />
            <section className="products-list">
                {products.map(product => {
                    return <ProductCard imagePath={product.imagePath} brand={product.brand} model={product.model} price={product.price} />
                })}
            </section>
        </div>

    )
}

function ProductCard({ imagePath, brand, model, price }) {
    return (
        <div className="product-card">
            <img src={imagePath} />
            <h1> {brand} </h1>
            <h3> {model} </h3>
            <h3> {price} zł </h3>
        </div>
    )
}

function ProductFilter() {
    const [currentBrand, setCurrentBrand] = useState('');
    const [currentModels, setCurrentModels] = useState('');
    const [redirectPath, setRedirectPath] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const brands = document.querySelector('.pf-brand').querySelectorAll('p');
        brands.forEach(brand => {
            brand.addEventListener('click', event => {
                setCurrentBrand(event.target.innerHTML);
            });
        });
    }, [])

    useEffect(() => {
        if (currentBrand) {
            const brandKey = currentBrand.toLowerCase().trim();
            setCurrentModels(models[brandKey]);
        }
    }, [currentBrand]);

    const redirect = (modelName) => {
        const brandKey = currentBrand.toLowerCase().trim().replace(/\s/g, '');
        const modelKey = modelName.target.innerHTML.toLowerCase().replace(/\s/g, '');
        const url = `/shop/${brandKey}/${modelKey}`;
        navigate(url);
        // Tutaj możesz dodać logikę przekierowania
    }
    
    const resetFilter = () => {
        navigate('/shop');
        setCurrentBrand(null);
        setCurrentModels(null);
    }

    return (
        <div className="products-filter">
            <div className="pf-brand">
                <h1> Marka </h1>
                <p> Nike </p>
                <p> Adidas </p>
                <p> Puma </p>
                <p> New Balance </p>
                <p> Converse </p>
                <p> Vans </p>
                <p> Reebok </p>
                <p> Timberland </p>
            </div>
            {currentModels && currentModels.length > 0 && (
                <>
                    <div>
                        <h1>Model</h1>
                        {currentModels.map((model, index) => (
                            <p key={index} onClick={e => redirect(e)}>{model}</p>
                        ))}
                    </div>
                    <button onClick={resetFilter}> Resetuj filtr   </button>
                </>

            )}
        </div>
    )
}