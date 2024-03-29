import React, {useEffect, useState} from 'react'
import ProductCard from "../Componets/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";


const PruductAll = () => {
    const [productList, setProductList] = useState()
    const [query, setQuery] = useSearchParams();

    console.log(setQuery)

    useEffect(() => {
        const getProducts = async () => {
             let keyword = query.get("q") || "";
            let url = `https://my-json-server.typicode.com/zzqjawnssla/react-hnm-router-practice/products?q=${keyword}`;
            let response = await fetch(url)
            let data = await response.json()
            // console.log('data', data)
            setProductList(data)


        }

        getProducts()
    }, [query]);

    console.log(productList)

    return (
        <div>
            <Container>
                 <Row>
                    {productList && productList.map((menu) => (
                        <Col key={menu.id} lg={3}><ProductCard item={menu}/></Col>
                    ))}
                </Row>
        </Container>


</div>
)
}

export default PruductAll