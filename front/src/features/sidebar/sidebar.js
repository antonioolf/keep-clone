import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectActiveMenu } from '../../app/slices/interfaceSlice';
import { Container } from './style';

const SidebarItem = styled.div`
    background-color: white;
    min-height: 48px;
    border-radius: 0 25px 25px 0;
    display: flex;
    align-items: center;
    padding-left: 12px;
    cursor: pointer;
    color: #202124;

    &.active {
        background-color: #feefc3 !important;
    }

    &:hover {
        background-color: #f1f3f4;
    }

    & > .material-symbols-rounded {
        padding: 12px;
    }
`;

function Sidebar() {
    const activeMenu = useSelector(selectActiveMenu);

    const markers = [
        { title: 'Compras', active: false },
        { title: 'Contas', active: false },
        { title: 'Investimentos', active: false },
        { title: 'Lazer', active: false },
        { title: 'Negócios', active: false },
        { title: 'Saúde', active: false },
        { title: 'Viagens', active: false },
        { title: 'Outros', active: false }
    ];

    return (
        <Container>
            <SidebarItem className="active" onClick={ () => alert('asdf') }>
                <span className='material-symbols-rounded'>lightbulb</span>
                <span>Notas</span>
            </SidebarItem>
            
            {markers.map((item, index) => (
                <SidebarItem key={index} onClick={ () => alert('asdf') }>
                    <span className='material-symbols-rounded'>label</span>
                    <span>{ item.title }</span>
                </SidebarItem>
            ))}
        </Container>
    );
}

export default Sidebar;
