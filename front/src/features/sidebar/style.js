import styled from 'styled-components';
import { sidebarWidth } from '../utils/sizes';

const Container = styled.div`
    width: ${sidebarWidth};
    height: 100%;
    padding-top: 8px;
    position: fixed;
    background-color: white;
`;

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

export { Container, SidebarItem, sidebarWidth };