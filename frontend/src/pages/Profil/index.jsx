import { useParams } from 'react-router-dom'

import Card from '../../components/Card'
import DailyChart from '../../components/DailyChart'
import ChartsCard from '../../components/ChartsCard'
import ChartAverageSessions from '../../components/ChartAverageSessions'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'

import { FormatData } from '../../utils/classes/FormatData.js'


import calories from '../../assets/calories-icon.svg'
import proteins from '../../assets/protein-icon.svg'
import carbs from '../../assets/carbs-icon.svg'
import fat from '../../assets/fat-icon.svg'

import { useState, useEffect } from "react";

import { getReponse } from "../../utils/getResponse"

import './index.css';


export default function Profil() {

    const useMockedData = true

    const { userId } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const data = async () => {
            const response = await getReponse(userId, useMockedData)
            setData(response);
        }
        data();
    }, []);
    if (data === null) return null;

    const formattedData = new FormatData(data)
    const userMainData = formattedData.mainData
    const userAverageSessions = formattedData.averageSessions
    const userActivity = formattedData.activity
    const userPerformance = formattedData.performance

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
                                data={userActivity}
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