/* eslint-disable import/extensions */
import axios from 'axios';
import express from 'express';
import { join } from 'path';
// eslint-disable-next-line import/no-unresolved
import { PartyReputationUpstreamType } from './types';
// eslint-disable-next-line import/no-unresolved
import { manipulatePartyReputationUpstream } from './utils';

const app = express();
const port = 8080;

const v2Path = join(__dirname, '../frontends');
app.use(express.static(v2Path));

app.get('/api/party-reputation', async (_, res) => {
  const externalUrl = 'http://reagent1.f4.htw-berlin.de:8123';

  try {
    const upstreamRequest = await axios.get(externalUrl);
    const upstreamData: PartyReputationUpstreamType = upstreamRequest.data;
    const manipulatedData = manipulatePartyReputationUpstream(upstreamData);

    res.send({ msg: 'success', data: manipulatedData });

    return;
  } catch (e) {
    res.status(400).send({ msg: 'Bad request', e });
  }
});

app.get('/api/potential-party', async (_, res) => {
  const externalUrl = 'http://reagent1.f4.htw-berlin.de:8081/tweets';

  try {
    const upstreamRequest = await axios.get(externalUrl);
    const upstreamData = upstreamRequest.data;

    res.send({ msg: 'success', data: upstreamData });

    return;
  } catch (e) {
    res.status(400).send({ msg: 'Bad request', e });
  }
});

app.get('/v1', (req, res) => {
  res.sendFile(join(__dirname, '../frontends', 'v1/index.html'));
});

app.get('/', (req, res) => {
  res.redirect('/frontend-v2/#');
});

app.listen(port, () => console.log(`Running on port ${port}`));
