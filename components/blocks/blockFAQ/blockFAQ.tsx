import Image from "next/image";
import React from 'react';
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./blockFAQ.module.css";

interface FAQType {
  title: string,
  desc: string
}

interface ItemProps {
  item: FAQType
}

interface Props {
  items: Array<FAQType>
}

type BlockFAQItemState = {
  visible: Boolean
};

class BlockFAQItem extends React.Component<ItemProps, BlockFAQItemState> {
  state: BlockFAQItemState = {
    visible: false
  };

  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles["faqItem"] + ' ' + (this.state.visible ? styles.visible : '')}>
        <button onClick={this.toggleAction.bind(this)} className={styles["toggleButton"] + " " + styles.toggleButtonWrapper}>
          <img className={styles["toggleButton"]} src="/images/plus.svg" />
        </button>
        <div className={styles["title"]} onClick={this.toggleAction.bind(this)}>{this.props.item.title}</div>
        <div className={styles["desc"]}>{this.props.item.desc}</div>
      </div>
    );
  }


  toggleAction() {
    this.setState({
      visible: !this.state.visible
    });
  }
}

const BlockFAQ: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles["container"] + " contentWrapper"}>
      <Title1>Fequently asked questions</Title1>
      <div className={styles["faqWrapper"]}>{
        props.items.map((item, index) => <BlockFAQItem key={'faq_' + index} item={item} />)
      }</div>
    </div>
  );
};

export default BlockFAQ;
