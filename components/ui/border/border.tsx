import React, { FunctionComponent } from 'react';
import styles from './index.module.css';

type Props = {
  visibility: boolean
}

const Border: FunctionComponent<Props> = ({ visibility }) => {
  const display = visibility ? 'block' : 'none';
  return (
    <div className={styles["border"]} style={{ display }}>
    </div>
  )
}

export default Border
