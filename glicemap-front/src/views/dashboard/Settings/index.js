import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const FormsElements = () => {
    const [validated, setValidated] = useState(false);
    const [validatedTooltip, setValidatedTooltip] = useState(false);
    const [supportedCheckbox, setSupportedCheckbox] = useState(false);
    const [supportedRadio, setSupportedRadio] = useState(false);
    const [supportedSelect, setSupportedSelect] = useState(0);
    const [supportedFile, setSupportedFile] = useState(0);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleSubmitTooltip = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidatedTooltip(true);
    };

    const supportedSelectHandler = (event) => {
        setSupportedSelect(parseInt(event.target.value));
    };

    const supportedFileHandler = (event) => {
        setSupportedFile(!!event.target.value);
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"><i class="feather icon-user"/> Dados Pessoais</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="marco.aurelio@usp.br" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Nome</Form.Label>
                                            <Form.Control type="name" placeholder="Marco Aurélio" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>CRM</Form.Label>
                                            <Form.Control type="name" placeholder="4206969" />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Senha Atual</Form.Label>
                                        <Form.Control type="password" placeholder="Digite sua senha atual" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Nova Senha</Form.Label>
                                        <Form.Control type="password" placeholder="Digite sua nova senha" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirme a Nova Senha</Form.Label>
                                        <Form.Control type="password" placeholder="Confirme sua nova senha" />
                                    </Form.Group>
                                    <Button variant="primary" style={{float:"right", margin:"0"}}>Salvar</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsElements;
