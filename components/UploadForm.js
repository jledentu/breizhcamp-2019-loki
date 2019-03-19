import React from 'react';
import { Button, Card, Form, Icon, Row, Upload } from 'antd';
import 'antd/dist/antd.css';

const logo = require('./ghostbusters-logo.png');

export default props => 
<Card
    title="Joindre une photo"
    style={{ width: 500 }}
    >
    <p>Si possible, joignez une photo pour nous permettre d'identifier le fantôme :</p>

    <Form.Item>
        <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Cliquez ou déposez un fichier pour le charger</p>
        </Upload.Dragger>
    </Form.Item>
    <Row type="flex" justify="space-between">
        <Button ghost={props.broken}>Annuler</Button>
        <Button type="primary" htmlType="submit">Terminer la demande</Button>
    </Row>
</Card>