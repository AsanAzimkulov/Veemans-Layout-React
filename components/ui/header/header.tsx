import { FunctionComponent } from "react";

import Link from "next/link";
import Logo from "../logo/logo";
import BurgerMenu from "../burger-menu/burger-menu";

import styles from "./header.module.css";

type PropsType = {
  cb?: (flag: boolean) => void
}

const Header: FunctionComponent<PropsType> = ({ cb }) => {
  const onOpenMenu = (flag: boolean) => {
    if (cb) {
      cb(flag)
    }
  }
  return (
    <header className={styles.container}>
      <Logo></Logo>
      <nav className={styles.topCenterMenu}>
        <Link href="">About</Link>
        <Link href="">NFT Veeman</Link>
        <Link href="">Ecosystem</Link>
        <Link href="">PVP competition</Link>
        <Link href="">Road Map</Link>
      </nav>
      <BurgerMenu cb={onOpenMenu}></BurgerMenu>
    </header >
  );
};

export default Header;
