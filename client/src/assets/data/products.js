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
    {
        "brandId": "adidas",
        "modelId": "campus",
        "brand": "Adidas",
        "model": "Campus 00s",
        "price": 549.99,
        "imagePath": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4659ee058ba34bd2a5d0af500104c17d_9366/Campus_00s_Shoes_Czern_HQ8708_01_standard.jpg"
    },
    {
        "brandId": "adidas",
        "modelId": "samba",
        "brand": "Adidas",
        "model": "Samba",
        "price": 549.99,
        "imagePath": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Buty_Samba_OG_Bialy_B75806_01_standard.jpg"
    },
    {
        "brandId": "adidas",
        "modelId": "campus",
        "brand": "Adidas",
        "model": "Campus 00s",
        "price": 549.99,
        "imagePath": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce738cbe5342421996feaf5001044964_9366/Campus_00s_Shoes_Szary_HQ8707_01_standard.jpg"
    },
    {
        "brandId": "adidas",
        "modelId": "gazelle",
        "brand": "Adidas",
        "model": "Gazelle",
        "price": 499.99,
        "imagePath": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97f86eede1374615a058a81700a27444_9366/Buty_Gazelle_Czern_CQ2809_01_standard.jpg"
    },
    {
        "brandId": "adidas",
        "modelId": "spezial",
        "brand": "Adidas",
        "model": "Spezial",
        "price": 499.99,
        "imagePath": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb18cfdee5484bafb694a97601138947_9366/Buty_Handball_Spezial_Niebieski_BD7632_01_standard.jpg"
    },
    {
        "brandId": "adidas",
        "modelId": "yeezy",
        "brand": "Adidas",
        "model": "Yeezy",
        "price": 419.65,
        "imagePath": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0619255387a4ffe9b50ad90011df4dd_9366/YZY_QNTM_ADULTS_Szary_GX1317_01_standard.jpg"
    },
    
    // Dodaj więcej produktów, jeśli to konieczne
];

