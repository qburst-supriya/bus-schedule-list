
import {apiUrls} from '../../configs/constants'
import api from './base'



 const  fetchScheduleList = async () =>{
    try {
      let c= await api.get(apiUrls.scheduleList);

      c = c?.data?.data
     
    return c;
        
    } catch (error) {
    //handle error
    }
  }


export default fetchScheduleList

//   async function fetchMultipleData() {
//     try {
//       const [data1, data2] = await Promise.all([
//         api.get('/endpoint1'),
//         api.get('/endpoint2'),
//       ]);
//       // Handle the data
//     } catch (error) {
//       // Handle errors
//     }
//   }


// const source = axios.CancelToken.source();

// try {
//   const response = await api.get('/endpoint', {
//     cancelToken: source.token,
//   });
//   // Handle the response
// } catch (error) {
//   if (axios.isCancel(error)) {
//     // Request was canceled
//   } else {
//     // Handle other errors
//   }
// }

// // To cancel the request
// source.cancel('Request canceled by the user');