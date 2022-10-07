import React, { FunctionComponent, useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import classNames from "../../customs/classNames";
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

  const {language} = useContext(AppContext);

  return React.createElement(
    type,
    { className: styles['title'] + classNames({className: styles['title_rus'], condition: language === 'RUS'}), style: { fontSize: size } },
    children
  );
};

export default Title1;
