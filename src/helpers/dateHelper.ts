import moment from "moment";

/**
 * formatDateHelper used to format the given date in
 * the below foramt using moment library
 * 
 * @param date - date in  ISO 8601 format
 * @returns the formatted date
 */
export const formatDateHelper = (date: string) => {
  return moment.utc(date).format("MMM Do, YYYY");
};
