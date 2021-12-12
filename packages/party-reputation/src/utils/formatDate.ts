/**
 * Function to format a date to be displayed on the chart
 * @param date Stringified date object.
 */
export const formatDate = (date: string): string => new Date(date).toLocaleDateString('fi-FI');
