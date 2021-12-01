import React from 'react';

import { Stack, Button, ButtonProps } from '@mui/material';
import { useReputationModel } from '../../../../hooks/useReputationModels';
import { useActiveParty } from '../../../../hooks/useActiveParty';

const HOME = 'home';

const Tabs = (): JSX.Element => {
  const { data } = useReputationModel();
  const { activeParty, setActiveParty } = useActiveParty();

  const getVariant = (party: string): ButtonProps['variant'] => (party === activeParty ? 'contained' : 'outlined');

  return (
    <Stack direction="row" marginTop={4} spacing={1}>
      {[{ party: HOME }, ...data].map(({ party }) => (
        <Button
          key={party}
          variant={getVariant(party)}
          sx={{ borderRadius: 2.5 }}
          onClick={() => setActiveParty(party)}
        >
          {party}
        </Button>
      ))}
    </Stack>
  );
};

export default Tabs;
