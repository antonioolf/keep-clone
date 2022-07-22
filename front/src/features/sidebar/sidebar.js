import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectActiveMenu } from '../../app/slices/interfaceSlice';

const background = 'green';

const Container = styled.div`
    width: 280px;
    height: 100%;
    background-color: ${background};
`;

function Sidebar() {
  const activeMenu = useSelector(selectActiveMenu);

  return (
    <Container>
        { activeMenu ? 'true' : 'false' }
    </Container>
  );
}

export default Sidebar;
