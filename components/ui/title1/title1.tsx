import React, { FunctionComponent } from "react";
import styles from "./title1.module.css";

interface Props {
  type?: "h1" | "h2" | "h3";
  size?: string;
  children: JSX.Element | string;
}

const Title1: FunctionComponent<Props> = ({
  children,
  type = "h1",
  size = "50px",
}) => {
  // children.props.className =  styles.title

  return React.createElement(
    type,
    { className: styles['title'], style: { fontSize: size } },
    children
  );
};

export default Title1;
