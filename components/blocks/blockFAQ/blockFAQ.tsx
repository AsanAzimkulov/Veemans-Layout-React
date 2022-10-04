import Image from "next/image";
import React, { useState } from 'react';
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./blockFAQ.module.css";

interface FAQType {
  title: string,
  desc: string
}

interface ItemProps {
  item: FAQType,
  isVisible: boolean,
  onToggle: (title: string) => void
}

interface Props {
  items: Array<FAQType>,
}

type BlockFAQItemState = {
  visible: Boolean
};

class BlockFAQItem extends React.Component<ItemProps, BlockFAQItemState> {
  // state: BlockFAQItemState = {
  //   visible: false
  // };

  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles["faqItem"] + ' ' + (this.props.isVisible ? styles.visible : '')}>
        <button onClick={() => this.props.onToggle(this.props.item.title)} className={styles["toggleButton"] + " " + styles.toggleButtonWrapper}>
          {/* <img className={styles["toggleButton"]} src="/images/plus.svg" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
            className={styles["toggleButton"]}
          >
            <rect
              width="39"
              height="39"
              x="0.5"
              y="0.5"
              fill="url(#paint0_linear_770_53)"
              rx="19.5"
            ></rect>
            <g className={styles['toggleButtonCrosshair']}>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.2 28V12h1.6v16h-1.6z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M12 19.2h16v1.6H12v-1.6z"
                clipRule="evenodd"
              ></path>
            </g>
            <rect
              width="39"
              height="39"
              x="0.5"
              y="0.5"
              stroke="url(#paint1_linear_770_53)"
              rx="19.5"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_770_53"
                x1="40"
                x2="-7.835"
                y1="0"
                y2="17.809"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5E1CEB"></stop>
                <stop offset="1" stopColor="#200468"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_770_53"
                x1="0"
                x2="18.864"
                y1="40"
                y2="33.187"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#946BF3"></stop>
                <stop offset="1" stopColor="#7858C4" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </button>
        <div className={styles["title"]} onClick={() => this.props.onToggle(this.props.item.title)}>{this.props.item.title}</div>
        <div className={styles["desc"]}>{this.props.item.desc}</div>
      </div>
    );
  }


  // toggleAction() {
  //   this.setState({
  //     visible: !this.state.visible
  //   });
  // }
}

const BlockFAQ: FunctionComponent<Props> = (props) => {
  const [activeFaq, setActiveFaq] = useState<string>('');
  const onChangeActiveFaq = (title: string) => {
    if (title === activeFaq) {
      setActiveFaq('')
    } else {
      setActiveFaq(title)
    }
  }
  return (
    <div className={styles["container"] + " contentWrapper"}>
      <Title1>Frequently asked questions</Title1>
      <div className={styles["faqWrapper"]}>{
        props.items.map((item, index) => <BlockFAQItem key={'faq_' + index} item={item} isVisible={item.title === activeFaq} onToggle={onChangeActiveFaq} />)
      }</div>
    </div>
  );
};

export default BlockFAQ;
