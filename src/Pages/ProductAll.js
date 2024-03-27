import React, {useEffect, useState} from 'react'
import ProductCard from "../Componets/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

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