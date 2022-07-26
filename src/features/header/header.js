import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../../components/IconButton";

import { toggle, selectHasScroll } from "../../app/slices/interfaceSlice";
import { headerHeight } from "../utils/sizes";

import {
  Container,
  LogoContainer,
  Left,
  Center,
  Right,
  UserPicture,
} from "./style";

function Header() {
  const [hasFocus, setHasFocus] = useState(false);
  const dispatch = useDispatch();
  const hasScroll = useSelector(selectHasScroll);

  return (
    <Container hasScroll={hasScroll} headerHeight={headerHeight}>
      <Left>
        <IconButton icon="menu" onClick={() => dispatch(toggle())} />
        <LogoContainer href="#">
          <img src="logo.png" alt="Keep" />
          <span className="logoTitle">Keep</span>
        </LogoContainer>
      </Left>
      <Center hasFocus={hasFocus}>
        <div className="inputContainer">
          <IconButton icon="search" />
          <input
            type="text"
            placeholder="Pesquisar"
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          <IconButton icon="close" />
        </div>
      </Center>
      <Right>
        <div className="appOptionsContainer">
          <IconButton className="miniSearch" icon="search" />
          <IconButton icon="refresh" />
          <IconButton icon="view_stream" />
          <IconButton icon="settings" className="material-symbols-outlined" />

          <IconButton className="iconButtonApps" icon="apps" />
          <UserPicture className="userPicture" src="profile.jpeg" />
        </div>
      </Right>
    </Container>
  );
}

export default Header;
