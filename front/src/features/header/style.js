import styled from 'styled-components';

const LogoContainer = styled.a`
  text-decoration: none;
  height: 40px;
  padding-left: 4px;
  display: flex;
  align-items: center;

  & > img {
    height: 100%;
  }
  & > .logoTitle {
    font-size: 22px;
    color: #5f6368;
    text-decoration: none;
    margin-left: 8px;
  }
`;

const Container = styled.div`
    /* -webkit-box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%), 0px 2px 4px -1px rgb(0 0 0 / 20%);
    box-shadow: 0px 4px 5px 0pxrgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12),0px 2px 4px -1px rgba(0,0,0,.2); */
    -webkit-box-shadow: inset 0 -1px 0 0 #dadce0;
    box-shadow: inset 0 -1px 0 0 #dadce0;

    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 12px;

    & > div {
        height: 100%;
        align-items: center;
        display: flex;
    }
`;

const Left = styled.div`
    padding-right: 12px;
`;
const Center = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px 355px 8px 75px;
    flex-grow: 1;

    & > .inputContainer {
        display: flex;
        align-items: center;
        ${ props => { if (props.hasFocus === false) {
            return `background-color: #f1f3f4;`
        } else {
            return `
                background-color: white;
                -webkit-box-shadow: 0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%);
                box-shadow: 0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%);
            `;
        }}};
    }
    & > .inputContainer {
        border-radius: 8px;
    }

    & input {
        background-color: transparent;
    }
    
    /* Remove all borders from inpuot */
    & input, & input:focus, & input:hover, & input:active, & input:focus-visible {
        border: none;
        outline: none;
    }

    & > .inputContainer, & input {
        width: 100%;
        height: 100%;
    }
`;

const Right = styled.div`
    & > .userOptionsContainer {
        margin-left: 23px;
        display: flex;
        align-items: center;
    }

    & > .userOptionsContainer > .userPicture {
        border-radius: 50%;
    }
`;

const UserPicture = styled.img`
    height: 40px;
    width: 40px;
    padding: 4px 4px;
`;

export { 
    LogoContainer,
    Container,
    Left,
    Center,
    Right,
    UserPicture
};