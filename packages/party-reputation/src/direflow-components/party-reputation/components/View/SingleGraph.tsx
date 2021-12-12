import React, { useMemo } from 'react';
import {
  LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend,
} from 'recharts';

import { ReputationModel } from '../../../../types';
import { formatDate } from '../../../../utils/formatDate';
import { getLabelCount } from '../../../../utils/getLabelCount';
import { getPartyColor } from '../../../../utils/getPartyColor';

export type Props = {
  data: ReputationModel;
};

const SingleGraph = ({ data }: Props): JSX.Element => {
  const strokeColor = getPartyColor(data.party);
  const graphData = useMemo(
    () => data.dates.map((date, index) => ({
      date: formatDate(date),
      sentiment: data.sentiments[index],
    })),
    [data],
  );

  return (
    <LineChart
      width={800}
      height={500}
      data={graphData}
      margin={{
        top: 50,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" interval={getLabelCount(data)} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sentiment" stroke={strokeColor} strokeWidth={2} activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default SingleGraph;
