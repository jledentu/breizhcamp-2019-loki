import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const Comparison = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

const Screenshot = styled.div`
    background-image: url("${props => props.reference ? './images/taking-photo.jpg' : './images/taking-photo.jpg'}");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6em;
    height: 5em;
`;

export default ({onlyReference, fail, ...props}) => <Comparison>
    <Screenshot reference={true}>
        {onlyReference && <Icon type="camera" theme="filled"/>}
    </Screenshot>
    <Icon type={fail ? 'stop' : 'check-circle'} style={{padding: '0.5em', color: fail ? 'red': 'green'}} />
    {<Screenshot style={{visibility: onlyReference ? 'hidden': ''}}>
        <Icon type="camera" theme="filled"/>
    </Screenshot>}
</Comparison>