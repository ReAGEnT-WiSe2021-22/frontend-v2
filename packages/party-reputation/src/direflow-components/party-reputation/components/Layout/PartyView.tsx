import { Typography, Stack } from '@mui/material';
import React, { useMemo, FC } from 'react';

import SingleGraph from '../View/SingleGraph';
import Description from '../Description';
import ReputationLabel from '../ReputationLabel';

import { HOME } from '../../../../const';
import { useActiveParty } from '../../../../hooks/useActiveParty';
import { useReputationModel } from '../../../../hooks/useReputationModels';

const Container: FC = ({ children }) => <Stack py={4}>{children}</Stack>;

const PartyView = (): JSX.Element => {
  const { activeParty } = useActiveParty();
  const { data } = useReputationModel();

  const partyData = useMemo(
    () => data.find((reputationModel) => reputationModel.party === activeParty),
    [activeParty, data],
  );

  if (!partyData) {
    if (activeParty === HOME) {
      return (
        <Container>
          <Typography variant="h4">Calulating a party reputation using sentiment analysis</Typography>
          <Description />
        </Container>
      );
    }

    return (
      <Container>
        <Typography>Error view.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Stack>
        <Typography variant="h5">
          Sentiment analysis for
          {' '}
        </Typography>
        <Stack>
          <Typography variant="h4">{activeParty}</Typography>
          <ReputationLabel data={partyData} />
        </Stack>
        <SingleGraph data={partyData} />
      </Stack>
    </Container>
  );
};

export default PartyView;
