import mocked_data from "../../data/data"

import { useParams } from 'react-router-dom'

import Card from '../../components/Card'
import DailyChart from '../../components/DailyChart'
import ChartsCard from '../../components/ChartsCard'
import ChartAverageSessions from '../../components/ChartAverageSessions'


import calories from '../../assets/calories-icon.svg'
import proteins from '../../assets/protein-icon.svg'
import carbs from '../../assets/carbs-icon.svg'
import fat from '../../assets/fat-icon.svg'



import './index.css';

export default function Profil() {

    const { userId } = useParams();
    console.log(userId);

    let userMainData = mocked_data.USER_MAIN_DATA.filter(item => item.id === parseInt(userId))[0];
    let userActivity = mocked_data.USER_ACTIVITY.filter(item => item.userId === parseInt(userId))[0];
    let userAverageSessions = mocked_data.USER_AVERAGE_SESSIONS.filter(item => item.userId === parseInt(userId))[0];
    let userPerformance = mocked_data.USER_PERFORMANCE.filter(item => item.userId === parseInt(userId))[0];

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
                                            userAverageSessions.sessions
                                        }
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