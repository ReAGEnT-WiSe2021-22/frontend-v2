/* eslint-disable no-console */
export const microfrontends: string[] = [
  'search-engine',
  'party-reputation',
  'potential-party',
];

export const importWc = () => Promise.all(microfrontends.map(async (appName) => {
  try {
    await import(`./wc/${appName}`);
    console.log(`${appName} loaded`);
  } catch (e: any) {
    console.error(`${appName} not found.`);
    console.error(e);
  }
}));
