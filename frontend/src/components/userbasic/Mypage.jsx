import React from 'react'
import { Container, Row, Col, Image, Form, InputGroup, Button } from 'react-bootstrap';

const Mypage = () => {
    return (
        <div className='mypage-content'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="/img/logo.png" rounded className='mypage-img' />
                    </Col>

                    <Col xs={12} md={8}>
                        <Form.Label>닉네임 변경</Form.Label>
                        <InputGroup className="mb-1">
                            <Form.Control
                                placeholder="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                        <Form.Label>비밀번호 변경</Form.Label>
                        <InputGroup className="mb-1">
                            <Form.Control
                                type='password'
                                placeholder="상수는 술과 고기가 먹고싶다!"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                        <Form.Label>프로필 이미지 변경</Form.Label>
                        <InputGroup className="mb-1">
                            <Form.Control type="file" />
                            <Button variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>

                    </Col>
                </Row>

                <Row >
                    <Col xs={6}>xs=6</Col>
                    <Col xs={6}>xs=6</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Mypage
