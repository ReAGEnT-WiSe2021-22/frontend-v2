import {
  Skeleton, Typography, Box, Stack, Button,
} from '@mui/material';
import React, {
  FC, useEffect, useMemo, useState,
} from 'react';

import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import RefreshIcon from '@mui/icons-material/Refresh';

import { useFetch } from '../../../hooks/useFetch';
import { ReputationModelsContext } from '../../../hooks/useReputationModels';
import { ActivePartyContext } from '../../../hooks/useActiveParty';
import { ReputationModel } from '../../../types';
import { HOME } from '../../../const';

import Tabs from './Layout/Tabs';
import PartyView from './Layout/PartyView';

const Wrapper: FC = ({ children }) => (
  <Stack padding={6}>
    {children}
  </Stack>
);

const APIWrapper = (): JSX.Element => {
  const DEBUG = false;

  const [reputationModels, setReputationModels] = useState<ReputationModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [activeParty, setActiveParty] = useState('');

  const { apiRequest } = useFetch();

  const reputationModelsData = useMemo(() => ({ data: reputationModels }), [reputationModels]);
  const activePartyData = useMemo(() => ({
    activeParty,
    setActiveParty: (party: string) => setActiveParty(party),
  }), [activeParty]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await apiRequest('/api/party-reputation');
      if (response.data) {
        setReputationModels(response.data.data as ReputationModel[]);
        setActiveParty(HOME);
      }
    } catch (e) {
      console.error(e);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!DEBUG) {
      (window as any).partyReputationEnv = process.env.REACT_APP_ENVIRONMENT;
      fetchData();
    }
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton
          variant="rectangular"
          height={60}
          width={400}
          sx={{ marginBottom: 4 }}
        />
        <Skeleton variant="rectangular" height={500} width={400} />
      </Wrapper>
    );
  }

  if (hasError) {
    return (
      <Wrapper>
        <Stack
          direction="row"
          alignItems="flex-start"
          spacing={2}
          paddingX={3}
          paddingY={2}
          sx={{
            borderRadius: 4,
          }}
        >
          <PriorityHighIcon sx={{ marginTop: 0.75, fontSize: 40 }} />
          <Box>
            <Typography variant="h4">Oops!</Typography>
            <Typography variant="h5">
              Something went wrong.
            </Typography>
            <Button startIcon={<RefreshIcon />} sx={{ marginTop: 1 }} onClick={fetchData}>
              Click to try again
            </Button>
          </Box>
        </Stack>
      </Wrapper>
    );
  }

  return (
    <ReputationModelsContext.Provider value={reputationModelsData}>
      <ActivePartyContext.Provider value={activePartyData}>
        <Wrapper>
          <Typography variant="h3">Party Reputation</Typography>
          <Tabs />
          <PartyView />
        </Wrapper>
      </ActivePartyContext.Provider>
    </ReputationModelsContext.Provider>
  );
};

export default APIWrapper;
