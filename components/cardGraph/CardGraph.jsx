import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAreDataVisible } from '../../redux/data/data.selectors';

const data = [
  {
    id: 'japan',
    color: 'hsl(222, 230%, 50%)',
    data: [
      {
        x: 'plane',
        y: 300,
      },
      {
        x: 'helicopter',
        y: 273,
      },
      {
        x: 'boat',
        y: 60,
      },
      {
        x: 'train',
        y: 174,
      },
      {
        x: 'subway',
        y: 256,
      },
      {
        x: 'bus',
        y: 117,
      },
      {
        x: 'car',
        y: 100,
      },
      {
        x: 'moto',
        y: 278,
      },
      {
        x: 'bicycle',
        y: 78,
      },
      {
        x: 'horse',
        y: 203,
      },
      {
        x: 'skateboard',
        y: 163,
      },
      {
        x: 'others',
        y: 124,
      },
    ],
  },
];
const theme = {
  axis: {
    fontSize: '14px',
    tickColor: '#eee',
    ticks: {
      line: {
        stroke: '#555555',
      },
      text: {
        fill: '#ffffff',
      },
    },
    legend: {
      text: {
        fill: '#aaaaaa',
      },
    },
  },
  grid: {
    line: {
      stroke: '#888',
    },
  },
};

const CardGraph = ({ areDataVisible }) => {
  if (areDataVisible) {
    return (
      <ResponsiveLine
        theme={theme}
        lineWidth={4}
        curve='cardinal'
        colors={{ scheme: 'set1' }}
        data={data}
        margin={{ top: 30, right: 30, bottom: 40, left: 60 }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Amount ( $ )',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
      />
    );
  } else
    return (
      <div className='ContainerCentered'>
        <h4>...</h4>
      </div>
    );
};
const mapStateToProps = createStructuredSelector({
  areDataVisible: selectAreDataVisible,
});

export default connect(mapStateToProps)(CardGraph);
