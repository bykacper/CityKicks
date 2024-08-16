import React, { useState, useEffect } from "react";

export function productsLoader(brand, model) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(brand && model) {
            const filteredProducts = productsList.filter((product) => product.brandId === brand && product.modelId === model);
            setProducts(filteredProducts);
        } else if(brand) {
            const filteredProducts = productsList.filter((product) => product.brandId === brand);
            setProducts(filteredProducts)
        } else {
            setProducts(productsList);
        }
    }, [brand, model]); 

    return { products };
}

const productsList = [
    {
        "brandId": "nike",
        "modelId": "airforce",
        "brand": "Nike",
        "model": "Air Force 1",
        "price": 419.99,
        "imagePath": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8254cc4-b776-47b2-898f-7e6e1f564c94/buty-meskie-air-force-1-07-QMx6sn.png"
    },
    {
        "brandId": "nike",
        "modelId": "airforce",
        "brand": "Nike",
        "model": "Air Force 1",
        "price": 599.99,
        "imagePath": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2bc55e0d-f654-40cd-8045-33b29c2572fc/buty-meskie-air-force-1-m1jN56.png"
    },
    {
        "brandId": "nike",
        "modelId": "airjordan",
        "brand": "Nike",
        "model": "Air Jordan 1",
        "price": 649.99,
        "imagePath": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9921d678-ed65-49c6-bdcb-e85bebeb7c46/buty-meskie-air-jordan-1-mid-NDt47J.png"
    },
    {
        "brandId": "nike",
        "modelId": "dunk",
        "brand": "Nike",
        "model": "Dunk",
        "price": 549.99,
        "imagePath": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png"
    },
    {
        "brandId": "nike",
        "modelId": "airmax",
        "brand": "Nike",
        "model": "Air Max 95",
        "price": 879.99,
        "imagePath": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1672fff7-e0fa-4630-bb6d-0f52149b25a0/buty-air-max-95-cTcHp6.png"
    },
    {
        "brandId": "nike",
        "modelId": "airhuarache",
        "brand": "Nike",
        "model": "Air Huarache",
        "price": 389.99,
        "imagePath": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18919e9a-c43d-4f41-b669-e3f675488be4/buty-meskie-do-biegania-air-huarache-Zfxzn7.png"
    },
    
    // Dodaj więcej produktów, jeśli to konieczne
];

