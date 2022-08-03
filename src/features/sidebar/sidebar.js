import React from 'react';
import { Container, SidebarItem } from './style';
import { useSizes } from '../utils/sizes';
import { useSelector } from 'react-redux';
import { selectOpenedMenu } from '../../app/slices/interfaceSlice';

function Sidebar() {
    const { sidebarWidth } = useSizes();
    const openedMenu = useSelector(selectOpenedMenu);

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
        <Container sidebarWidth={sidebarWidth}>
            <SidebarItem className="active" openedMenu={openedMenu} sidebarWidth={sidebarWidth} onClick={ () => alert('asdf') }>
                <span className='material-symbols-rounded'>lightbulb</span>
                { openedMenu ? <span>Notas</span> : <></> }
            </SidebarItem>
            
            {markers.map((item, index) => (
                <SidebarItem key={index} openedMenu={openedMenu} sidebarWidth={sidebarWidth} onClick={ () => alert('asdf') }>
                    <span className='material-symbols-rounded'>label</span>
                    { openedMenu ? <span>{ item.title }</span> : <></> }
                </SidebarItem>
            ))}
        </Container>
    );
}

export default Sidebar;
