import React, { useMemo } from 'react';
import {
  LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend,
} from 'recharts';

import { ReputationModel } from '../../../../types';
import { getLabelCount } from '../../../../utils/getLabelCount';
import { getPartyColor } from '../../../../utils/getPartyColor';
import { groupSentimentData } from '../../../../utils/groupSentimentData';

export type Props = {
  data: ReputationModel[];
};

const HomeGraph = ({ data }: Props): JSX.Element => {
  const parties = useMemo(() => data.map(({ party }) => party), [data]);
  const graphData = useMemo(
    () => groupSentimentData(data),
    [data],
  );

  return (
    <LineChart
      width={1200}
      height={600}
      data={graphData}
      margin={{
        top: 50,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" interval={getLabelCount(data[0])} tick={{ fontFamily: '"Noto Sans JP"' }} />
      <YAxis dataKey="sentiment" domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} tick={{ fontFamily: '"Noto Sans JP"' }} />
      <Tooltip />
      <Legend />
      {parties.map((party) => (
        <Line key={`${party}-line`} connectNulls type="monotone" dot={false} dataKey={party} stroke={getPartyColor(party)} strokeWidth={2} activeDot={{ r: 8 }} />
      ))}
    </LineChart>
  );
};

export default HomeGraph;
