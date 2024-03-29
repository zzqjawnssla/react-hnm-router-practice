import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {Col, Container, DropdownButton, Row, Dropdown} from "react-bootstrap";

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState();


    useEffect(() => {
        const getProductDetail = async () => {
            let url = `https://my-json-server.typicode.com/zzqjawnssla/react-hnm-router-practice/products/${id}`;
            let response = await fetch(url)
            let data = await response.json()
            console.log('data', data)
            setProduct(data)
        }
        getProductDetail()

    }, [id]);
    return (
        <Container>
            <Row>
                <Col>
                    <img alt='detailImg' src={product?.img}/>
                </Col>
                <Col>
                    <div className="icon-container">
                        <div>
                            {product?.choice === true &&
                                <div className="choice-box">Conscious Choice</div>
                            }
                        </div>
                        <div>
                            {product?.new === true &&
                                <div className="new-box">신제품</div>
                            }
                        </div>
                    </div>
                    <div><strong>{product?.title}</strong></div>
                    <div>₩{parseInt(product?.price).toLocaleString('ko-KR')}</div>
                    <div>{product?.description}</div>

                    <div>
                        <DropdownButton
                            id="Size"
                            variant="secondary"
                            title={selectedSize || "Size-Select"}
                            className="mt-2"
                            data-bs-theme="dark"
                        >
                            <Dropdown.Item
                                href="#/action-4"
                                onClick={() => setSelectedSize('Size-Select')}
                            >
                                Size-Select
                            </Dropdown.Item>
                            {product?.size.map((size, index) => (
                                <Dropdown.Item
                                    href={`#/action-${index}`}
                                    key={index}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </Dropdown.Item>
                            ))}
                            <Dropdown.Divider/>
                            <Dropdown.Item
                                href="#/action-4"
                                onClick={() => setSelectedSize('*Custom Size')}
                            >
                                *Custom Size
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div>
                        <button style={{marginRight: "3px"}} className="btn btn-dark mt-2">바로 구매하기</button>
                        <button style={{marginRight: "3px"}} className="btn btn-outline-dark mt-2">장바구니</button>
                        <button className="btn btn-outline-dark mt-2">찜</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail