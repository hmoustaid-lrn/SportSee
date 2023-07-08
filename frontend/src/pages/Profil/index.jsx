import mocked_data from "../../data/data"

import { useParams } from 'react-router-dom'



import './index.css';

export default function Profil() {

    const { userId } = useParams();
    console.log(userId);

    let userMainData = mocked_data.USER_MAIN_DATA.filter(item => item.id === parseInt(userId))[0];
    let userActivity = mocked_data.USER_ACTIVITY.filter(item => item.userId === parseInt(userId))[0];
    let userAverageSessions = mocked_data.USER_AVERAGE_SESSIONS.filter(item => item.userId === parseInt(userId))[0];
    let userPerformance = mocked_data.USER_PERFORMANCE.filter(item => item.userId === parseInt(userId))[0];


    console.log(userMainData);
    console.log(userActivity);
    console.log(userAverageSessions);
    console.log(userPerformance);

};