import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAreDataVisible } from '../../redux/data/data.selectors';

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
      point: '#de3535',
    },
  },
};

const CardGraph = ({ areDataVisible, data }) => {
  if (areDataVisible) {
    return (
      <ResponsiveLine
        markers={[
          {
            axis: 'y',
            value: 0,
            lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
            legend: 'Objectif 1 for 3 month',
            textStyle: {
              fill: 'white',
            },
          },
        ]}
        theme={theme}
        lineWidth={3}
        curve='cardinal'
        colors={{ scheme: 'set1' }}
        data={data}
        margin={{ top: 30, right: 30, bottom: 40, left: 60 }}
        useMesh={true}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        pointColor={{ theme: 'grid.line.point' }}
        pointSize={10}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 0,
          tickRotation: 0,
          legend: 'Amount ( € )',
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
