/* eslint-disable no-console */

/**
 *
 * Array of available web component names.
 */
export const microfrontends: string[] = [
  'search-engine',
  'party-reputation',
  'potential-party',
];

/**
 *
 * Function to import web components from list.
 * @see {@link microfrontends} for list of available web components.
 * @returns Web components.
 * Will be called before rendering the container.
 */
export const importWc = () => Promise.all(microfrontends.map(async (appName) => {
  try {
    await import(`./wc/${appName}`);
    console.log(`${appName} loaded`);
  } catch (e: any) {
    console.error(`${appName} not found.`);
    console.error(e);
  }
}));
