import Image from "next/image";
import { FunctionComponent } from "react";
import Cart2 from "../../carts/cart2/cart2";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block31.module.css";

const Block31: FunctionComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["columns1"]}>
        <div style={{ 'textAlign': 'center' }} className={styles.columns1__picture_desctop}>
          <img src="/images/block31_img1.png" className={styles.phonne} />
        </div>
        <div className={styles["info"]}>
          <div>
            <Title1>What is DRIVE 2 EARN?</Title1>
            <div style={{ 'textAlign': 'center' }} className={styles.columns1__picture_mobile}>
              <img src="/images/block31_img1.png" className={styles.phonne} />
            </div>
            <p className={styles["info__paragraph"]}>
              A new concept that suggests the possibility of virtual earnings
              for the actions that the user performs in the real world.
            </p>
            <p className={styles["info__paragraph"]}>
              To do this, you need to &quot;link&quot; your account with a mobile device.
              In a specific case, each user earns for daily movements on any type of transport, developing with a speed of 10 to 60 km/h
            </p>
            <div className={styles["info__buttons"]}>
              <Button1 variant="1">Join The Community</Button1>
              {/* <a className={styles["info__rm"]} href="">
                Read More
                <Image
                  src="/icons/arrow1.svg"
                  width="14"
                  height="14"
                  alt="->"
                ></Image>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div>
          <Cart2>
            <Title1 type="h3">Mission</Title1>
            <p>
              We are committed to making trips by private <br /> transport safer
              and greener by introducing speed <br /> rewards up to 60 km/h
              while reducing fuel <br /> consumption and emissions.
            </p>
          </Cart2>
        </div>
        <div style={{ 'textAlign': 'center' }} className={styles.orderPrefer}>
          <img src="/videos/v73.gif" style={{ 'width': '320px', 'height': '320px', 'marginTop': '20px', }} />
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div style={{ 'textAlign': 'center' }}>
          <img src="/images/block31_img3.png" style={{ 'width': '450px', 'marginTop': '50px' }} />
        </div>
        <div>
          <Cart2>
            <Title1 type="h3">NFT Veeman</Title1>
            <p>Digital avatar of your car.</p>
          </Cart2>
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div>
          <Cart2>
            <Title1 type="h3"> Mystery Box</Title1>
            <p>
              Find the Mystery box while driving and <br /> contains an
              improvement in the technical <br /> characteristics of the
              machine.
            </p>
          </Cart2>
        </div>
        <div style={{ 'textAlign': 'center' }} className={styles.orderPrefer}>
          <img src="/images/block31_img4.png" style={{ 'width': '500px', 'marginTop': '50px' }} />
        </div>
      </div>
    </div>
  );
};

export default Block31;
