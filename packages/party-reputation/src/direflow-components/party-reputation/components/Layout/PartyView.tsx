import { Typography, Stack } from '@mui/material';
import React, { useMemo, FC } from 'react';
import { HOME } from '../../../../const';

import { useActiveParty } from '../../../../hooks/useActiveParty';
import { useReputationModel } from '../../../../hooks/useReputationModels';

const Container: FC = ({ children }) => (
  <Stack py={4}>
    {children}
  </Stack>
);

const PartyView = (): JSX.Element => {
  const { activeParty } = useActiveParty();
  const { data } = useReputationModel();

  const partyData = useMemo(
    () => data.find(
      (reputationModel) => reputationModel.party === activeParty,
    ),
    [activeParty, data],
  );

  if (!partyData) {
    if (activeParty === HOME) {
      return (
        <Container>
          <Typography>
            Home view.
          </Typography>
        </Container>
      );
    }

    return (
      <Container>
        <Typography>
          Error view.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Stack>
        <Typography>
          View for:
          {' '}
          {activeParty}
        </Typography>
        <Typography variant="subtitle1">
          {JSON.stringify(partyData, undefined, 4)}
        </Typography>
      </Stack>
    </Container>
  );
};

export default PartyView;
