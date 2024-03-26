import React, {useEffect, useState} from 'react'
import ProductCard from "../Componets/ProductCard";

const PruductAll = () => {
    const [productList, setProductList] = useState()


    useEffect(() => {
        const getProducts = async () => {
            let url = 'http://localhost:5000/products'
            let response = await fetch(url)
            let data = await response.json()
            // console.log('data', data)
            setProductList(data)


        }

        getProducts()
    }, []);

    console.log(productList)

    return (
        <div>
            <ProductCard/>
        </div>
    )
}

export default PruductAll