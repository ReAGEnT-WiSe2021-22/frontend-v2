import faker from 'faker';

import { ReputationModel } from '../types';

const NUM_OF_PARTIES = 6;
const NUM_OF_DATAS = 70;
const createArray = (length: number) => Array.from(Array(length));
export const createMockDatas = (): ReputationModel[] => {
  const parties = createArray(NUM_OF_PARTIES).map(() => faker.lorem.word());

  return parties.map((party) => {
    const datas = createArray(NUM_OF_DATAS);
    return {
      party,
      dates: [...datas].map(() => faker.date.recent().toString()),
      sentiments: [...datas].map(() => Math.random()),
    };
  });
};
