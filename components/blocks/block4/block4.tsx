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
            <h4>Choose your NFT Veeman car from the NFT store</h4>
          </div>
          <div className={styles["blockDesc"]}>
          There is 5 different types of car with uniq characteristics 
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
            <h4>Drive any type of transport</h4>
          </div>
          <div className={styles["blockDesc"]}>
          With speed from 10 to 60 km.
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
          Earn tokens and mysterious boxes during the trip
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
          Buy the details, upgrade your car, improve performance and characteristics by leveling up to get more rewards.
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
            <h4>Form alliances and capture streets</h4>
          </div>
          <div className={styles["blockDesc"]}>
          Make other players pay for driving through your streets
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block4;
