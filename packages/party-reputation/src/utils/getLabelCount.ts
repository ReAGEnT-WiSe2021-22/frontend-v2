import { LABEL_COUNT } from '../const';
import { ReputationModel } from '../types';

/**
 * Function to get the amount of labels displayed on the chart and the
 *  remaining of the model data divided by the count
 * @param model Reputation model of a party
 */
export const getLabelCount = (model: ReputationModel): number => {
  const { dates } = model;
  const dataLength = dates.length;
  return dataLength > LABEL_COUNT ? LABEL_COUNT : dataLength;
};
