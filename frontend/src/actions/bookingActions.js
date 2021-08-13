import { 
  
    BOOKING_DETAILS_REQUEST,
    BOOKING_DETAILS_SUCCESS,
    BOOKING_DETAILS_FAIL,

    BOOKING_CREATE_REQUEST,
    BOOKING_CREATE_SUCCESS,
    BOOKING_CREATE_FAIL,
    BOOKING_CREATE_RESET,

    BOOKING_PAY_REQUEST,
    BOOKING_PAY_SUCCESS,
    BOOKING_PAY_FAIL,
    BOOKING_PAY_RESET,

} from '../constants/bookingConstants'
import axios from 'axios'

export const createBooking =(booking)=>async(dispatch,getState)=>{
    try{
        dispatch({type:BOOKING_CREATE_REQUEST})

        const {
            userLogin: {userInfo},
        }= getState()

        const config ={
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const{ data }= await axios.post( 
            '/api/booking/create',
            booking,
             config )

        dispatch({
            type:BOOKING_CREATE_SUCCESS,
            payload: data})

    
    }

    catch(error){
        dispatch({
            type:BOOKING_CREATE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const getBookingDetails =(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:ORDER_DETAILS_REQUEST})

        const {
            userLogin: {userInfo},
        }= getState()

        const config ={
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const{ data }= await axios.get( 
            `/api/order/${id}`,
             config )

        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload: data})

    }

    catch(error){
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const payOrder =(id,paymentResult)=>async(dispatch,getState)=>{
    try{
        dispatch({type:ORDER_PAY_REQUEST})

        const {
            userLogin: {userInfo},
        }= getState()

        const config ={
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const{ data }= await axios.put( 
            `/api/order/${id}/pay`,
            paymentResult,
             config )

        dispatch({
            type:ORDER_PAY_SUCCESS,
            payload: data})

    }

    catch(error){
        dispatch({
            type:ORDER_PAY_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

