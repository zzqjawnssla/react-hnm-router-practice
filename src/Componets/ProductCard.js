import React from 'react'
import {Card, CardBody, CardImg} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ProductCard = ({item}) => {
    const navigate = useNavigate()
const showDetail = () => {
    navigate(`/product/${item.id}`)
}

    return (
        <div>
            <Card className="custom-card" onClick={showDetail}>
                <CardBody>
                    <CardImg className="card-img-hover" alt="img" src={item?.img}/>
                    <div><strong>{item?.title}</strong></div>
                    <div>₩{parseInt(item?.price).toLocaleString('ko-KR')}</div>
                    <div className="icon-container">
                        <div>
                            {item?.choice === true &&
                                <div className="choice-box">Conscious Choice</div>
                            }
                        </div>
                        <div>
                            {item?.new === true &&
                                <div className="new-box">신제품</div>
                            }
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard