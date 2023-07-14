
import mocked_data from "../data/data"
import { useAxios } from '../utils/hooks/useAxios'
import { FormatData } from '../utils/classes/FormatData.js'


export const getReponse = async (userId, useMockedData) => {

    useMockedData? console.log("Mocked Data Used"):console.log("API Data Used")
    
    const endpoints = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`,
        `http://localhost:3000/user/${userId}/activity`,
    ]

    

    const filtered_mocked_data = {
        USER_MAIN_DATA: mocked_data.USER_MAIN_DATA.filter((data) => data.id === parseInt(userId))[0],
        USER_ACTIVITY: mocked_data.USER_ACTIVITY.filter((data) => data.userId === parseInt(userId))[0],
        USER_AVERAGE_SESSIONS: mocked_data.USER_AVERAGE_SESSIONS.filter((data) => data.userId === parseInt(userId))[0],
        USER_PERFORMANCE: mocked_data.USER_PERFORMANCE.filter((data) => data.userId === parseInt(userId))[0],
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = useMockedData? filtered_mocked_data : useAxios(endpoints)

    return response 
};
