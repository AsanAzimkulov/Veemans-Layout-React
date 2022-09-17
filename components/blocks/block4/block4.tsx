import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block4.module.css";

interface Props {
}

const Block4: FunctionComponent<Props> = ({ }) => {
  return (
    <div className={styles["container"] + " contentWrapper"}>
      <Title1>How does it work</Title1>
      <div className={styles["blockRow"]} style={{ 'marginTop': '70px' }}>
        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>01</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>Choose your NFT Veeman from the NFT</h4>
          </div>
          <div className={styles["blockDesc"]}>
            Veemans is a Drive 2 EARN NFT application, a
            community of people who use not only cars, but any other transport with a speed from 10 to 60 km/h.
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockItemConnect"]}>
            <img src="/images/group4Line.svg" />
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>02</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>Drive any type of transport, spending</h4>
          </div>
          <div className={styles["blockDesc"]}>
            Veemans is a Drive 2 EARN NFT application, a
            community of people who use not only cars, but any other transport with a speed from 10 to 60 km/h.
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockItemConnect"]}>
            <img src="/images/group4Line.svg" />
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>03</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>Get a reward by driving</h4>
          </div>
          <div className={styles["blockDesc"]}>
            Veemans is a Drive 2 EARN NFT application,
            a community of people who use not only cars, but any other transport with a speed from 10 to 60 km/h.
          </div>
        </div>
      </div>

      <div className={styles["blockRow"]} style={{ 'marginTop': '70px' }}>
        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>04</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>Upgrade your NFT Veeman</h4>
          </div>
          <div className={styles["blockDesc"]}>
            Buy the details, change and upgrade your car appearance, improve performance and characteristics by leveling up to get more rewards.
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockItemConnect"]}>
            <img src="/images/group4Line.svg" />
          </div>
        </div>

        <div className={styles["blockItem"]}>
          <div className={styles["blockCount"]}>
            <div className={styles["countBox"]}>
              <span>05</span>
            </div>
          </div>
          <div className={styles["blockTitle"]}>
            <h4>Alliances</h4>
          </div>
          <div className={styles["blockDesc"]}>
            Form alliances, capture streets and territories, collect rent from other players.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;
