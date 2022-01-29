const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export const titleCase = (title: string) => title.split('-').map((word) => capitalizeFirstLetter(word)).join(' ');
