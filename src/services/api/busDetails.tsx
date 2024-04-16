
import {apiUrls} from '../../configs/constants'
import api from './base'

type AxiosResponse = {
  data: {
    data: {
      trip:{
        bookings: any[]}}
  }
}

 const  fetchBusDetails = async (busId: number): Promise<any> =>{
    try {
      let c:AxiosResponse = await api.get(apiUrls.busDetails + busId);
      c.data.data.trip = {...c.data.data.trip, "bookings": [
        {
            "id": 10,
            "createdAt": "2024-02-15T04:43:39.800Z",
            "updatedAt": "2024-02-15T04:43:39.800Z",
            "pnrNumber": "1qq5ai",
            "seatNumber": "1",
            "status": "confirmed",
            "fare": "1000.00",
            "passengerName": "John Doe",
            "passengerAge": 25,
            "passengerGender": "male",
            "tripId": 1
        },
        {
            "id": 4,
            "createdAt": "2024-02-15T03:20:36.695Z",
            "updatedAt": "2024-02-15T03:20:36.695Z",
            "pnrNumber": "1diw76",
            "seatNumber": "14",
            "status": "confirmed",
            "fare": "1000.00",
            "passengerName": "Adam",
            "passengerAge": 30,
            "passengerGender": "male",
            "tripId": 1
        },
        {
            "id": 5,
            "createdAt": "2024-02-15T03:20:36.717Z",
            "updatedAt": "2024-02-15T03:20:36.717Z",
            "pnrNumber": "1diw76",
            "seatNumber": "15",
            "status": "confirmed",
            "fare": "1000.00",
            "passengerName": "Mary",
            "passengerAge": 3,
            "passengerGender": "female",
            "tripId": 1
        },
        {
            "id": 6,
            "createdAt": "2024-02-15T03:20:36.718Z",
            "updatedAt": "2024-02-15T03:20:36.718Z",
            "pnrNumber": "1diw76",
            "seatNumber": "16",
            "status": "confirmed",
            "fare": "1000.00",
            "passengerName": "Eva",
            "passengerAge": 29,
            "passengerGender": "female",
            "tripId": 1
        },
        {
            "id": 11,
            "createdAt": "2024-02-15T04:44:20.666Z",
            "updatedAt": "2024-02-15T04:44:20.666Z",
            "pnrNumber": "10hdho",
            "seatNumber": "2",
            "status": "confirmed",
            "fare": "1000.00",
            "passengerName": "John Doe",
            "passengerAge": 25,
            "passengerGender": "male",
            "tripId": 1
        }
    ]}
     
    
    return c.data.data.trip;
        
    } catch (error) {
      // Handle errors
    }
  }


export default fetchBusDetails