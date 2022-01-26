import React from 'react';
import { Stack, Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward, Remove } from '@mui/icons-material';

import { ReputationModel } from '../../../types';

export type Props = {
  data: ReputationModel;
};

type ReputationTendency = '>' | '<' | '=';

const getReputationTendency = (
  first: number,
  last: number,
): ReputationTendency => {
  if (first > last) {
    return '>';
  }
  if (first < last) {
    return '<';
  }
  return '=';
};

const TendencyIcon = ({ tendency }: { tendency: ReputationTendency }) => {
  switch (tendency) {
    case '>':
      return <ArrowDownward />;
    case '<':
      return <ArrowUpward />;
    default:
      return <Remove />;
  }
};

const getTendencyText = (tendency: ReputationTendency) => {
  switch (tendency) {
    case '>':
      return 'Decrease';
    case '<':
      return 'Increase';
    default:
      return 'Stay';
  }
};

const StackColor: Record<ReputationTendency, { bg: string; color: string }> = {
  '>': {
    bg: '#FAA',
    color: '#833',
  },
  '<': {
    bg: '#AAF',
    color: '#338',
  },
  '=': {
    bg: '#AFA',
    color: '#383',
  },
};

const ReputationLabel = ({ data }: Props): JSX.Element => {
  const { values } = data;

  const [first, ...rest] = values;
  const last = rest[rest.length - 1];
  const tendency = getReputationTendency(first, last);
  const { bg, color } = StackColor[tendency];

  return (
    <Stack spacing={0.75} paddingY={2}>
      <Typography variant="subtitle1" fontWeight="bold">Reputation tendency</Typography>
      <Stack
        direction="row"
        paddingX={1}
        paddingY={0.75}
        width="fit-content"
        spacing={0.6}
        sx={{ bgcolor: bg, color, borderRadius: 1 }}
      >
        <TendencyIcon tendency={tendency} />
        <Typography>{getTendencyText(tendency)}</Typography>
      </Stack>
    </Stack>
  );
};

export default ReputationLabel;
