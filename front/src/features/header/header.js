import { React, useState } from 'react';
import IconButton from '../../components/IconButton';
import { useDispatch } from 'react-redux';
import { toggle } from '../../app/slices/interfaceSlice';
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
  const dispatch = useDispatch();

  return (
    <Container>
      <Left>
        <IconButton icon="menu" onClick={() => dispatch(toggle())} />
        <LogoContainer href="#">
          <img src="logo.png" alt="Keep" />
          <span className='logoTitle'>Keep</span>
        </LogoContainer>
      </Left>
      <Center hasFocus={hasFocus}>
        <div className="inputContainer">
          <IconButton icon="search" />
          <input type="text" placeholder="Pesquisar" onFocus={() => setHasFocus(true)} onBlur={() => setHasFocus(false)} />
          <IconButton icon="close" />
        </div>
      </Center>
      <Right>
        <div className='appOptionsContainer'>
          <IconButton icon="refresh" />
          <IconButton icon="view_stream" />
          <IconButton icon="settings" className="material-symbols-outlined" />
        </div>
        <div className='userOptionsContainer'>
          <IconButton icon="apps" />
          <UserPicture className="userPicture" src="https://lh3.googleusercontent.com/ogw/AOh-ky2tl0CIV_BHTg7udGckTAtv7DErivWGOMI1l-3VPw=s64-c-mo" />
        </div>
      </Right>
    </Container>
  );
}

export default Header;
