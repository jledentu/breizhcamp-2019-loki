import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { black } from 'ansi-colors';

const dataSource = [{
    name: 'Venkman',
    firstName: 'Peter'
}, {
    name: 'Stantz',
    firstName: 'Raymond'
}, {
    name: 'Spengler',
    firstName: 'Egon'
}, {
    name: 'Zeddemore',
    firstName: 'Winston'
}];

const columns = [{
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName'
}, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
}];

const Wrapper = styled.div`
    * td {
        padding: ${props => props.broken ? '1em' : 'transparent'}
    }
`;

export default props => <Wrapper {...props}>
    <Table dataSource={dataSource} columns={columns} bordered={true}></Table>
</Wrapper>;