import { apiUrls } from '../../../../configs/apis';
import api from '../../../../services/api/base';

const fetchScheduleList = async () => {
  try {
    const response = await api.get(apiUrls.scheduleList);
    return response?.data?.data;
  } catch (error) {
    //handle error
  }
};

export default fetchScheduleList;
