import React, { FC } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledStatBar = styled.div`
  display: flex;
  flex-flow: column;

  .StatBar__progress {
    height: 8px;
    background: #343537;

    &-bar {
      height: 100%;
      background: #f7bf4a;
    }
  }

  .StatBar__stats {
    display: flex;
    align-items: center;
    background: #141517;
    color: #dcdcdc;
    padding: 15px;

    .Stat__filename {
      font-weight: 700;
      font-size: 20px;
    }

    .Stat__state {
      font-size: 14px;
      font-weight: 300;
      font-style: italic;
      opacity: 0.7;
    }

    .Stat__time {
      font-weight: 700;
      font-size: 20px;
    }

    .Stat__percent {
      font-size: 14px;
      font-weight: 300;
      font-style: italic;
      opacity: 0.7;
    }

    &-left {
      margin-right: 10px;
    }

    &-right {
      margin-left: auto;
      text-align: right;
    }
  }
`;

interface Props {
  durationCurrent: number;
  durationEstimate: number;
  durationPercent: number;
  durationRemaining: number;
  filamentLength?: number;
  filamentVolume?: number;
  fileName: string;
  state: string;
}

const StatBar: FC<Props> = ({
  durationCurrent,
  durationEstimate,
  durationPercent,
  durationRemaining,
  fileName,
  state,
}) => {
  const formattedPercentage = Math.min(durationPercent * 100, 100).toFixed(2);

  return (
    <StyledStatBar>
      <div className="StatBar__progress">
        <div className="StatBar__progress-bar" style={{ width: `${formattedPercentage}%` }}></div>
      </div>
      <div className="StatBar__stats">
        <div className="StatBar__stats-left">
          <div className="Stat__filename">{fileName}</div>
          <div className="Stat__state">
            {state}
            {state === 'Printing' && ` - ${formattedPercentage}%`}
          </div>
        </div>
        <div className="StatBar__stats-right">
          <div className="Stat__time">
            {moment.duration(durationCurrent, 'ms').format('hh:mm:ss', { trim: false })} /{' '}
            {moment.duration(durationEstimate, 'ms').format('hh:mm:ss', { trim: false })}
          </div>
          <div className="Stat__percent">
            Time Remaining - {moment.duration(durationRemaining, 'ms').format('h [hours], m [minutes], s [seconds]')}
          </div>
        </div>
      </div>
    </StyledStatBar>
  );
};

export default StatBar;
