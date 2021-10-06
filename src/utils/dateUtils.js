// import { format, isValid, parse } from 'date-fns';
import { format, isValid, set, addDays } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';
const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm';

const DEFAULT_SEARCH_START_TIME = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const DEFAULT_SEARCH_END_TIME = {
  hours: 23,
  minutes: 59,
  seconds: 59,
};

const toFormattedDate = formatter => timestamp => {
  // for datString
  // const date = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date());
  const date = new Date(timestamp);
  return isValid(date) ? format(date, formatter) : 'Invalid Date';
};

export const toDateText = toFormattedDate(DATE_FORMAT);

export const toDateTimeText = toFormattedDate(DATE_TIME_FORMAT);

export const getDefaultSearchRange = (range = 7) => {
  const defaultSearchStartTime = set(new Date(), DEFAULT_SEARCH_START_TIME);
  const defaultSearchEndTime = set(new Date(), DEFAULT_SEARCH_END_TIME);
  return {
    startDt: addDays(defaultSearchStartTime, range),
    endDt: addDays(defaultSearchEndTime, 0),
  };
};
