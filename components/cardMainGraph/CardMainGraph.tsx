import React, { useState, useEffect } from 'react';
import styles from '../../styles/CardMainGraph.module.scss';

import CardGraph from '../cardGraph/CardGraph';

type Props = {
  title: string;
  data: any;
};

const CardMainGraph = ({ title, data }: Props) => {
  return (
    <div className={styles.cardMainGraphContainer}>
      <h3 className={styles.cardMainGraphTitle}>{title}</h3>
      <div className={styles.cardMainGraph}>
        <CardGraph data={data} />
      </div>
    </div>
  );
};

export default CardMainGraph;
