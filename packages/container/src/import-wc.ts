export const microfrontends: string[] = ['search-engine', 'party-reputation'];

export const importWc = () => Promise.all(microfrontends.map(async (appName) => {
  try {
    await import(`./wc/${appName}`);
    // eslint-disable-next-line
    console.log(`${appName} loaded`);
  } catch {
    // eslint-disable-next-line
    console.error(`${appName} not found.`);
  }
}));
