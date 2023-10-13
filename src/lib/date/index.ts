import moment from 'moment';

let nowMoment: moment.Moment;

export const now = () => moment(nowMoment) || moment();

export const setNow = (momentInput: moment.MomentInput) => {
  nowMoment = moment(momentInput);
};
