import faker from 'faker';
import { Party } from '../const';

import { ReputationModel } from '../types';

const NUM_OF_DATAS = 70;
const createArray = (length: number) => Array.from(Array(length));
export const createMockDatas = (): ReputationModel[] => {
  const parties = Object.values(Party);

  return parties.map((party) => {
    const datas = createArray(NUM_OF_DATAS);
    return {
      party,
      dates: [...datas]
        .map(() => faker.date.past().toString())
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime()),
      values: [...datas].map(() => Math.random() * 5),
      rawData: [...datas].map(() => Math.random() * 5),
    };
  });
};
