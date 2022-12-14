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
import { useEffect, useState } from "react";
import LanguageToggle from "../components/ui/languageToggle/languageToggle";
import AppContext from "../contexts/AppContext";
import 'intersection-observer';
import AcceptPopup from "../components/blocks/AcceptPopup";


const Home: NextPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const onToggleMenu = (flag: boolean) => {
    setIsMenuOpened(flag);
  }

  const [language, setLanguage] = useState('ENG');




  return (
    <AppContext.Provider value={{
      language,
      setLanguage: setLanguage as any,
    }}>
      <div className={styles.page}>
        <Head>
          <title>Veemans</title>
          <meta name="description" content="Veemans" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/images/chartDeca.png" />
        </Head>
        <Header cb={onToggleMenu}></Header>

        <main className={styles.main}>
          <AcceptPopup text={
            language === 'RUS'
              ?
              '???? ???????????????????? ?????????? cookie ?????? ???????????????????? ????????????????????????????. ???? ???????????? ???????????? ???????????? ?? ??????, ?????????? ?????????? cookie ???? ????????????????????, ?? ??????????'
              :
              'We are using cookies for the best possible experience. You can find out more about which cookies we are using in our'
          }
            linkText={
              language === 'RUS'
                ?
                '???????????????? ?????????????????????????? ???????????? cookie.'
                :
                'cookie policy.'
            }
            onAccept={() => {}}
            buttonText={
              language === 'RUS'
              ?
              '?????????????? ?????????? cookie'
              :
              'Accept cookies'
            }
            href="#"
          />
          <Border visibility={true} />
          <LanguageToggle></LanguageToggle>
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
            {/* <Block9></Block9> */}

            {/*Roadmap*/}
            <Block10></Block10>

          </div>

          {/* Partners */}
          {/*<div className={styles.partnersDesctop}><Block11></Block11></div>*/}

          {/*Project Partners*/}

          {/*<BlockTeam title={
            language === 'RUS' ?
              '???????????????? ??????????????'
              :
              "Project Partners"} members={[
                { 'title': 'Eleanor Pena', 'email': 'curtis.weaver@example.com' },
                { 'title': 'Robert Fox', 'email': 'georgia.young@example.com' },
                { 'title': 'Marvin McKinney', 'email': 'nevaeh.simmons@example.com' },
                { 'title': 'Ralph Edwards', 'email': 'michelle.rivera@example.com' },
                { 'title': 'Darrell Steward', 'email': 'alma.lawson@example.com' }
              ]}></BlockTeam>

            <div className={styles.mtSpace}></div> */}

          {/*Team*/}

          <BlockTeam title={
            language === 'RUS' ?
              '??????????????'
              :
              "Team"
          } members={[
            { 'title': 'Anatoliy Betin', 'email': 'Co founder / Product' },
            { 'title': 'Timofey Grigorenko', 'email': 'Co founder' },
            { 'title': 'Lev Gayun', 'email': 'CMO' },
            { 'title': 'Dmitriy Zyuskun', 'email': 'Project Manager' },
            { 'title': 'Nikita Kuznecov', 'email': 'CTO' },
          ]}></BlockTeam>

          <BlockTeam title={''} mini members={[
            { 'title': 'Nikita Trotila', 'email': 'Head 3D' },
            { 'title': 'Kirill Frolov', 'email': 'Head of Design' },
            { 'title': 'Timur Valiev', 'email': 'Community manager' },
            { 'title': 'Slava Voroncov', 'email': '3d Unity' },
          ]}></BlockTeam>


          {/*FAQ*/}
          <BlockFAQ items={
            language === 'RUS'
              ?
              [
                { 'title': '?????? ?????? ???????????? NFT Veemans?', 'desc': 'abcd' },
                { 'title': '?????????????? ?????????? ???????? NFT?', 'desc': 'abcd' },
                { 'title': '?????? ?????? ???????????? SOL?', 'desc': 'abcd' },
                { 'title': '?????? ???????? ?? ???? ???????? ?????????????????????', 'desc': 'abcd' },
                { 'title': '???????????? ???? ?????????? ?????? ???????????????', 'desc': 'abcd' }
              ]
              :
              [
                { 'title': 'How do I buy NFT Veemans ?', 'desc': 'abcd' },
                { 'title': 'How much are our NFT???S warth ?', 'desc': 'abcd' },
                { 'title': 'How do I buy SOL ?', 'desc': 'abcd' },
                { 'title': 'What if I don???t drive ?', 'desc': 'abcd' },
                { 'title': 'Why are there no funds on board ?', 'desc': 'abcd' }
              ]
          }></BlockFAQ>

          <Fotter></Fotter>
        </main>

      </div>
    </AppContext.Provider >
  );
};

export default Home;
