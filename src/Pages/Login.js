import React from 'react'
import {Button, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";


const Login = ({setAuthenticated}) => {
    const navigate = useNavigate()
    const loginUser = (e) => {
        e.preventDefault()
        console.log('login')
        setAuthenticated(true)
        navigate('/')

    }
    return (

        <Container style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
            <Row className="login-pc">


            <Form onSubmit={(e) => loginUser(e)}>
                <h3 style={{marginLeft: '40px'}}><strong>로그인</strong></h3>
                <p className="mobile-text"
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '15px',
                    marginBottom: '30px'

                }}>
                    다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요
                </p>
                <Button style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px',
                    border: '1px solid transparent',
                    padding: '15px',
                    backgroundColor: '#FFEB00',
                    fontSize: '18px',
                    width: '100%',
                    color: 'black'
                }}>
                    <FontAwesomeIcon icon={faComment} color='black'
                                     style={{fontSize: '1.5em', marginTop: '4px', marginRight: '5px'}}/>
                    카카오로 로그인
                </Button>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <hr style={{
                        borderTop: "1px solid black",
                        width: '40%',
                        marginRight: '10px'
                    }}/>
                    <span>또는</span>
                    <hr style={{
                        borderTop: "1px solid black",
                        width: '40%',
                        marginLeft: '10px'
                    }}/>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>이메일 <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control style={{border: '1px solid lightgrey', borderRadius: '0', fontSize: '20px'}}
                                  type="email"/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호 <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control style={{border: '1px solid lightgrey', borderRadius: '0', fontSize: '20px'}}
                                  type="password"/>
                </Form.Group>
                <div className="mobile-text" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="로그인 상태 유지"/>
                    </Form.Group>
                    <Form.Label>비밀번호를 잊으셨나요?</Form.Label>
                </div>
                <Button variant="primary" type="submit" style={{
                    backgroundColor: '#101010',
                    borderColor: '#101010',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontSize: '18px',
                    padding: '15px',
                }}>
                    로그인
                </Button>
                <Button style={{
                    backgroundColor: 'white',
                    borderColor: '#101010',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '0',
                    color: '#101010',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '10px',
                    fontSize: '18px',
                    padding: '15px',

                }}>
                    회원 가입하기
                </Button>
                <p style={{
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'underline'
                }}>멤버쉽 정보
                </p>
            </Form>

                </Row>
        </Container>

    )
}

export default Login