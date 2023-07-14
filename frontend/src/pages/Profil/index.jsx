import mocked_data from "../../data/data"

import { useParams } from 'react-router-dom'

import Card from '../../components/Card'
import DailyChart from '../../components/DailyChart'
import ChartsCard from '../../components/ChartsCard'
import ChartAverageSessions from '../../components/ChartAverageSessions'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'

import { useAxios } from '../../utils/hooks/useAxios'

import { FormatData } from '../../utils/classes/FormatData.js'


import calories from '../../assets/calories-icon.svg'
import proteins from '../../assets/protein-icon.svg'
import carbs from '../../assets/carbs-icon.svg'
import fat from '../../assets/fat-icon.svg'



import './index.css';

export default function Profil() {



    const use_mocked_data = true

    use_mocked_data ? console.log("Données mockées") : console.log("Données de l'api")

    const { userId } = useParams();

    const endpoints = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`,
        `http://localhost:3000/user/${userId}/activity`,
    ]


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = use_mocked_data ? mocked_data : useAxios(endpoints)


    const filtered_data = {
        USER_MAIN_DATA: response.USER_MAIN_DATA.filter((data) => data.id === parseInt(userId))[0],
        USER_ACTIVITY: response.USER_ACTIVITY.filter((data) => data.userId === parseInt(userId))[0],
        USER_AVERAGE_SESSIONS: response.USER_AVERAGE_SESSIONS.filter((data) => data.userId === parseInt(userId))[0],
        USER_PERFORMANCE: response.USER_PERFORMANCE.filter((data) => data.userId === parseInt(userId))[0],
    }

    const formattedData = new FormatData(filtered_data)

    const userMainData = formattedData.mainData
    const userAverageSessions = formattedData.averageSessions
    const userPerformance = formattedData.performance
    const userActivity = formattedData.activity



    return (
        <section className="profil-wrapper">
            <div className="profil">
                <h2 className="profil-title">
                    Bonjour{' '}
                    <span className="profil-firstName">
                        {userMainData.userInfos.firstName}
                    </span>
                </h2>
                <p className="profil-subtitle">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
                <div className="dashboard">
                    <div className="dashboard-charts-wrapper">

                        <div className="activity-charts">
                            <DailyChart
                                data={userActivity.sessions}
                            />
                        </div>

                        <div className="bottom-cards-wrapper">
                            <ChartsCard
                                className="average-sessions"
                                content={
                                    <ChartAverageSessions
                                        data={
                                            userAverageSessions
                                        }
                                    />
                                }
                            />

                            <ChartsCard
                                className="performance"
                                content={
                                    <PerformanceChart
                                        data={userPerformance}
                                    />
                                }
                            />
                            <ChartsCard
                                className="score"
                                content={
                                    <ScoreChart
                                        data={userMainData}
                                    />
                                }
                            />
                        </div>

                    </div>
                    <div className="dashboard-aside">
                        <Card
                            userKeyData={userMainData.keyData.calorieCount}
                            unit="kCal"
                            subtitle="Calories"
                            className="calorie"
                            logo={calories}
                        />
                        <Card
                            userKeyData={userMainData.keyData.proteinCount}
                            unit="g"
                            subtitle="Proteines"
                            className="protein"
                            logo={proteins}
                        />
                        <Card
                            userKeyData={userMainData.keyData.carbohydrateCount}
                            unit="g"
                            subtitle="Glucides"
                            className="carbohydrate"
                            logo={carbs}
                        />
                        <Card
                            userKeyData={userMainData.keyData.lipidCount}
                            unit="g"
                            subtitle="Lipides"
                            className="lipid"
                            logo={fat}
                        />
                    </div>
                </div>
            </div>

        </section>
    )

};