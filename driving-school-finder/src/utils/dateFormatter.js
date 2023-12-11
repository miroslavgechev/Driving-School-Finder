import moment from 'moment';
import 'moment/locale/bg';

export const formatDate = (date) =>
  moment(date).locale('bg').format('D MMM YYYY');