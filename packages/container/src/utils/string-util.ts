/**
 *
 * @param word A word string.
 * @returns Capitalised first letter of word.
 */
const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

/**
 *
 * Converts snake-case title to Title Case.
 * @param title A title string in snake-case format.
 * @returns A title string in Title Case format.
 */
export const titleCase = (title: string) => title.split('-').map((word) => capitalizeFirstLetter(word)).join(' ');
