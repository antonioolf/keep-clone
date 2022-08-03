import styled from 'styled-components';

const transitionTime = '0.2s';
const transition = `transition: width ${transitionTime} ease-in-out,` +
    `border-radius ${transitionTime} ease-in-out, ` + 
    `padding-left ${transitionTime} ease-in-out, ` +
    `margin-left ${transitionTime} ease-in-out`;

const Container = styled.div`
    width: ${props => props.sidebarWidth};
    height: 100%;
    padding-top: 8px;
    position: fixed;
    background-color: white;
    ${transition};
`;

const SidebarItem = styled.div`
    background-color: white;
    height: 48px;
    ${(props) => {
        if (props.openedMenu) {
            return `
                border-radius: 0 25px 25px 0;
                padding-left: 14px;
                width: ${props.sidebarWidth};
            `;
        } else {
            return `
                border-radius: 25px 25px 25px 25px;
                margin-left: 14px;
                width: 48px;
            `;
        }
    }};
    ${transition};
    display: flex;
    align-items: center;
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

export { Container, SidebarItem };