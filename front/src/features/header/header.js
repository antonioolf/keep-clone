import { React, useState } from 'react';
import IconButton from '../../components/IconButton';
import { 
  Container, 
  LogoContainer,
  Left,
  Center,
  Right,
  UserPicture
} from './style';

function Header() {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <Container>
      <Left>
        <IconButton identifier="menu" />
        <LogoContainer href="#">
          <img src="logo.png" alt="Keep" />
          <span className='logoTitle'>Keep</span>
        </LogoContainer>
      </Left>
      <Center hasFocus={hasFocus}>
        <div className="inputContainer">
          <IconButton identifier="search" />
          <input type="text" placeholder="Pesquisar" onFocus={() => setHasFocus(true)} onBlur={() => setHasFocus(false)} />
          <IconButton identifier="close" />
        </div>
      </Center>
      <Right>
        <div className='appOptionsContainer'>
          <IconButton identifier="refresh" />
          <IconButton identifier="view_stream" />
          <IconButton identifier="settings" />
        </div>
        <div className='userOptionsContainer'>
          <IconButton identifier="apps" />
          <UserPicture className="userPicture" src="https://lh3.googleusercontent.com/ogw/AOh-ky2tl0CIV_BHTg7udGckTAtv7DErivWGOMI1l-3VPw=s64-c-mo" />
        </div>
      </Right>
    </Container>
  );
}

export default Header;
