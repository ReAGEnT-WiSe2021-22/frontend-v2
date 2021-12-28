// @ts-ignore
import randomExt from 'random-ext';
import { Party, Tweet } from '../types';

const NUM_OF_TWEETS = 100;
const MAX_TWEET_LENGTH = 20;
const MIN_TWEET_LENGTH = 10;
const MAX_NAME_LENGTH = 10;
const MIN_NAME_LENGTH = 3;
const HASHTAGS_LENGTH = 4;

export const generateMockData = (): Tweet[] => {
  const data: Tweet[] = [];

  for (let i = 0; i < NUM_OF_TWEETS; i += 1) {
    const entry: Tweet = {
      id: randomExt.stringPattern('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
        x: [randomExt.restrictedString, [randomExt.CHAR_TYPE.HEX], 1, 1],
      }),
      text: randomExt.restrictedString(
        [randomExt.CHAR_TYPE.LOWERCASE, randomExt.CHAR_TYPE.UPPERCASE, randomExt.CHAR_TYPE.SPACE],
        MAX_TWEET_LENGTH,
        MIN_TWEET_LENGTH,
      ),
      userId: randomExt.stringPattern('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
        x: [randomExt.restrictedString, [randomExt.CHAR_TYPE.HEX], 1, 1],
      }),
      username: randomExt.restrictedString(
        [randomExt.CHAR_TYPE.LOWERCASE, randomExt.CHAR_TYPE.UPPERCASE],
        MAX_NAME_LENGTH,
        MIN_NAME_LENGTH,
      ),
      name: randomExt.restrictedString(
        [randomExt.CHAR_TYPE.LOWERCASE, randomExt.CHAR_TYPE.UPPERCASE],
        MAX_NAME_LENGTH,
        MIN_NAME_LENGTH,
      ),
      hashtags: randomExt.restrictedStringArray(
        HASHTAGS_LENGTH,
        [randomExt.CHAR_TYPE.LOWERCASE, randomExt.CHAR_TYPE.UPPERCASE],
        MAX_NAME_LENGTH,
        MIN_NAME_LENGTH,
      ),
      party: randomExt.pick(Object.keys(Party)),
      createdDate: randomExt.date(new Date()),
      sentiment: randomExt.integer(100, 10),
    };
    data.push(entry);
  }
  return data;
};
