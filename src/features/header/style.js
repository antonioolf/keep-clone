import styled from 'styled-components';
import {
  headerHeight,
  mediaQueryBreakSearch,
  mediaQueryBreakLogoType
} from '../utils/sizes';

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

    @media(max-width: ${mediaQueryBreakLogoType}) {
      display: none !important;
    }

    font-size: 22px;
    color: #5f6368;
    text-decoration: none;
    margin-left: 8px;
  }
`;

const boxShadow = {
  'withScroll': '0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12),0px 2px 4px -1px rgba(0,0,0,.2)',
  'withoutScroll': 'inset 0 -1px 0 0 #dadce0;'
}

const Container = styled.div`
  box-shadow: ${props => props.hasScroll ? boxShadow.withScroll : boxShadow.withoutScroll};
  position: fixed;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${headerHeight};
  padding: 0 12px;
  z-index: 1;

  & > div {
    height: 100%;
    align-items: center;
    display: flex;
  }
`;

const Left = styled.div`
    padding-right: 12px;
    @media(max-width: ${mediaQueryBreakLogoType}) {
      padding-right: 0;
    }
`;

const Center = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 8px 0 8px 75px;
    flex-grow: 1;

    @media(max-width: ${mediaQueryBreakLogoType}) {
      flex-grow: 0;
    }

    @media(max-width: ${mediaQueryBreakSearch}) {
        padding: 0;
    }

    & > .inputContainer {
        display: flex;
        align-items: center;
        border-radius: 8px;
        transition: box-shadow 0.05s ease-in;

        ${ props => { if (props.hasFocus === false) {
            return `background-color: #f1f3f4;`
        } else {
            return `
                background-color: white;
                box-shadow: 0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%);
            `;
        }}};

        @media(max-width: ${mediaQueryBreakSearch}) {
            display: none !important;
        }
    }

    & input {
        background-color: transparent;
        font-size: 16px;
    }
    
    /* Remove all borders from inpuot */
    & input, & input:focus, & input:hover, & input:active, & input:focus-visible {
        border: none;
        outline: none;
    }

    & > .inputContainer, & input {
        max-width: 720px;
        flex: 1%;
        height: 100%;
    }
`;

const Right = styled.div`
  @media(max-width: ${mediaQueryBreakLogoType}) {
    flex-grow: 1;
    justify-content: space-between;
  }

  & > .appOptionsContainer {
    display: flex;
    align-items: center;

    @media(max-width: ${mediaQueryBreakLogoType}) {
      display: flex;
      flex-grow: 1;
      justify-content: space-evenly;
    }

    & .material-symbols-rounded {
      @media(max-width: ${mediaQueryBreakLogoType}) {
        padding: 0;
      }
    }
  }


  & .iconButtonApps {
    margin-left: 23px;
    @media(max-width: ${mediaQueryBreakSearch}) {
      margin-left: 0;
    }
  }

  & .userPicture {
    border-radius: 50%;
  }

  @media(min-width: ${mediaQueryBreakSearch}) {
    & .miniSearch {
      display: none;
    }
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