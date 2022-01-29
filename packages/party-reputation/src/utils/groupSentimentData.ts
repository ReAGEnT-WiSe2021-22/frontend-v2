import groupBy from 'lodash.groupby';
import { ReputationModel } from '../types';
import { formatDate } from './formatDate';

/**
 * Function to group sentiment data of a party by date. This is used mainly to display the sentiment
 * analysis to a graph, and therefore should the object should contain the names of all the parties
 * as a key attribute and the sentiment of the party on the date as the value.
 * @param data
 * @example [{party: 'A', sentiments: [1, 2], dates: ['1.1.1', '1.2.1']},
 *           {party: 'B', sentiments: [3, 4]},dates: ['1.1.1', '1.2.1']}]
 *  ---> [{date: '1.1.1', A: 1, B: 3}, {date: '1.2.1', A: 2, B: 4}]
 */
export const groupSentimentData = (data: ReputationModel[]) => {
  const sentimentData = data.map((party) => party.dates.map((date, index) => ({
    date: formatDate(date),
    values: party.values[index],
    rawData: party.rawData[index],
    party: party.party,
  })));

  const groupedByDate = groupBy(
    sentimentData.reduce((a, b) => [...a, ...b], []),
    'date',
  );
  return Object.keys(groupedByDate).map((key) => ({
    date: key,
    ...groupedByDate[key]
      .map(({ party, values }) => ({ [party]: values }))
      .reduce((a, b) => ({ ...a, ...b }), {}),
  }));
};
