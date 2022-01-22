// @ts-ignore
import randomExt from 'random-ext';
import {
  MAX_NAME_LENGTH,
  MAX_NUM_OF_HASHTAGS,
  MAX_TWEET_LENGTH,
  MIN_NAME_LENGTH,
  MIN_TWEET_LENGTH,
  NUM_OF_TWEETS,
} from '../const';
import { Party, Tweet } from '../types';

/**
 *
 * @returns Array of Tweet object.
 * Function to generate test Tweets consists of
 * strings and Dates to be displayed on a list.
 */
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
        randomExt.integer(MAX_NUM_OF_HASHTAGS),
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
