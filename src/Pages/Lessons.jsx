import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Img1 from "../Assets/item-img1.png";
import Img2 from "../Assets/item-img2.png";
import Img3 from "../Assets/item-img3.png";

export default function Lessons() {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-5 mt-1">
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: "300px", objectFit: "contain" }}
                            src={Img1}
                        />
                        <Card.Body>
                            <Card.Title>Что такое HTML?</Card.Title>
                            <Card.Text
                                style={{ height: "100px" }}
                                className="mt-4 mb-4"
                            >
                                HTML (HyperText Markup Language) представляет
                                язык разметки гипертекста, используемый
                                преимущественно для создания документов в сети
                                интернет
                            </Card.Text>
                            <Button variant="primary" href="card1">
                                Перейти
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: "300px", objectFit: "contain" }}
                            src={Img2}
                        />
                        <Card.Body>
                            <Card.Title>Что такое CSS?</Card.Title>
                            <Card.Text
                                style={{ height: "100px" }}
                                className="mt-4 mb-4"
                            >
                                CSS - Cascading Style Sheets, или каскадные
                                таблицы стилей, определяющие представление
                                документа
                            </Card.Text>
                            <Button variant="primary" href="card2">
                                Перейти
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: "300px", objectFit: "contain" }}
                            src={Img3}
                        />
                        <Card.Body>
                            <Card.Title>Что такое JavaScript?</Card.Title>
                            <Card.Text
                                style={{ height: "100px" }}
                                className="mt-4 mb-4"
                            >
                                JavaScript - это то, что делает живыми
                                веб-страницы, которые мы каждый день
                                просматриваем в своем веб-браузере.
                            </Card.Text>
                            <Button variant="primary" href="card3">
                                Перейти
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
