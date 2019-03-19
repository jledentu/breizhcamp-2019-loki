import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const logo = require('./ghostbusters-logo.png');

export default props => 
    <Button
        shape="round"
        size="large"
        {...props}>
        <img src={logo} height="28" style={{paddingRight: '10px', opacity: props.disabled ? 0.5 : 1}}></img>
        Contacter les Ghostbusters !
    </Button>;