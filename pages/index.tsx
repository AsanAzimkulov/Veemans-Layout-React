import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Block1 from "../components/blocks/block1/block1";
import Block2 from "../components/blocks/block2/block2";
import Block3 from "../components/blocks/block3/block3";
import Block31 from "../components/blocks/block31/block31";
import Block4 from "../components/blocks/block4/block4";
import Block5 from "../components/blocks/block5/block5";
import Block6 from "../components/blocks/block6/block6";
import Block7 from "../components/blocks/block7/block7";
import Block8 from "../components/blocks/block8/block8";
import Block9 from "../components/blocks/block9/block9";
import Block10 from "../components/blocks/block10/block10";
import Block11 from "../components/blocks/block11/block11";
import BlockTeam from "../components/blocks/blockTeam/blockTeam";
import BlockFAQ from "../components/blocks/blockFAQ/blockFAQ";
import Fotter from "../components/blocks/fotter/fotter";
import Button1 from "../components/ui/button1/button1";
import Header from "../components/ui/header/header";
import Border from '../components/ui/border/border';
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const onToggleMenu = (flag: boolean) => {
    setIsMenuOpened(flag);
  }
  return (
    <div className={styles.page}>
      <Head>
        <title>Veemans</title>
        <meta name="description" content="Veemans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cb={onToggleMenu}></Header>
      <main className={styles.main}>
        <Border visibility={true} />
        <Block1></Block1>

        <div className={styles.mainBg}>
          <Block2></Block2>
          <Block3>
            <Block31></Block31>
          </Block3>

          <Block4></Block4>

          {/*Classes of NFT*/}
          <Block5></Block5>

          {/*The Motion Roller is looped*/}
          <Block6></Block6>

          {/*Elements of the Veemans Ecosystem*/}
          <Block7></Block7>

          {/*Sport PvP competitions with real users*/}
          <Block8></Block8>

          {/*VMN Token Distribution*/}
          <Block9></Block9>

          {/*Roadmap*/}
          <Block10></Block10>

        </div>

        {/*Partners*/}
        <Block11></Block11>

        {/*Project Partners*/}
        <BlockTeam title="Project Partners" members={[
          { 'title': 'Eleanor Pena', 'email': 'curtis.weaver@example.com' },
          { 'title': 'Robert Fox', 'email': 'georgia.young@example.com' },
          { 'title': 'Marvin McKinney', 'email': 'nevaeh.simmons@example.com' },
          { 'title': 'Ralph Edwards', 'email': 'michelle.rivera@example.com' },
          { 'title': 'Darrell Steward', 'email': 'alma.lawson@example.com' }
        ]}></BlockTeam>

        {/*Team*/}

          <BlockTeam title="Team" members={[
            { 'title': 'Jane Cooper', 'email': 'debra.holt@example.com' },
            { 'title': 'Leslie Alexander', 'email': 'bill.sanders@example.com' },
            { 'title': 'Dianne Russell', 'email': 'sara.cruz@example.com' },
            { 'title': 'Ralph Edwards', 'email': 'michelle.rivera@example.com' },
            { 'title': 'Darrell Steward', 'email': 'alma.lawson@example.com' }
          ]}></BlockTeam>


        {/*FAQ*/}
        <BlockFAQ items={[
          { 'title': 'How do I buy NFT Veemans ?', 'desc': 'abcd' },
          { 'title': 'How much are our NFT’S warth ?', 'desc': 'abcd' },
          { 'title': 'How do I buy SOL ?', 'desc': 'abcd' },
          { 'title': 'What if I don’t drive ?', 'desc': 'abcd' },
          { 'title': 'Why are there no funds on board ?', 'desc': 'abcd' }
        ]}></BlockFAQ>

        <Fotter></Fotter>
      </main>
    </div>
  );
};

export default Home;
