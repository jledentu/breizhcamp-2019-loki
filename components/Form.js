import React from 'react';
import styled from 'styled-components';
import { Button, Card, Form, Radio, Row } from 'antd';
import 'antd/dist/antd.css';

const logo = require('./ghostbusters-logo.png');

export default props => 
<Card
    title="Demander l'aide de l'équipe Ghostbusters"
    extra={<a href="#">Aide</a>}
    style={{ width: 500 }}
    >
    <p>Vous avez un problème de fantôme ? Nous sommes là pour vous aider !
    Veuillez remplir ce formulaire :</p>

    <h4>Qu'est-ce qui vous croire que votre maison est hantée ?</h4>

    <Form.Item>
        <Row>
            <Radio value="a">Mon fils voit des gens qui sont morts</Radio>
        </Row>
        <Row>
            <Radio value="b">Mes meubles bougent tout seuls</Radio>
        </Row>
        <Row>
            <Radio value="c">Ma fille a été aspirée par l'armoire de sa chambre</Radio>
        </Row>
        <Row>
            <Radio value="d">Un bio-exorciste excentrique me pourrit la vie</Radio>
        </Row>
        <Row>
            <Radio value="e">Autre</Radio>
        </Row>
    </Form.Item>
    <Row type="flex" justify={props.broken ? 'start' : 'space-between'}>
        <Button ghost={props.broken}>Annuler</Button>
        <Button type="primary">Continuer</Button>
    </Row>
</Card>