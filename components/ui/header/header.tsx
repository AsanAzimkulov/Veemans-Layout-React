import { FunctionComponent, useContext, useState } from "react";

import Link from "next/link";
import Logo from "../logo/logo";
import BurgerMenu from "../burger-menu/burger-menu";

import styles from "./header.module.css";
import classNames from "../../customs/classNames";
import AppContext from "../../../contexts/AppContext";

type PropsType = {
  cb?: (flag: boolean) => void
}

const Header: FunctionComponent<PropsType> = ({ cb }) => {

  const {language} = useContext(AppContext);

  const [isBurgerOpened, setIsBurgerOpened] = useState<boolean>(false);

  const onOpenMenu = (flag: boolean) => {
    if (cb) {
      cb(flag)
      setIsBurgerOpened(flag)
    }
  }
  return (
    <header className={styles.container + classNames({className: styles.container_opened, condition: isBurgerOpened})}>
      <Logo></Logo>
      <nav className={styles.topCenterMenu + classNames({className: styles.topCenterMenu_rus, condition: language === 'RUS'})}>
        <Link href="">{(language === 'RUS') ? 'О компании' : 'About'}</Link>
        <Link href="">{(language === 'RUS') ? 'NFT Veeman' : 'NFT Veeman'}</Link>
        <Link href="">{(language === 'RUS') ? 'Экосистема' : 'Ecosystem'}</Link>
        <Link href="">{(language === 'RUS') ? 'PVP соревнования' : 'PVP competition'}</Link>
        <Link href="">{(language === 'RUS') ? 'Дорожная карта' : 'Road Map'}</Link>
      </nav>
      <BurgerMenu cb={onOpenMenu}></BurgerMenu>
    </header >
  );
};

export default Header;
