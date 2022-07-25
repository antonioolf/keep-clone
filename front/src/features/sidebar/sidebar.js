import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveMenu } from '../../app/slices/interfaceSlice';
import { Container, SidebarItem } from './style';

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
