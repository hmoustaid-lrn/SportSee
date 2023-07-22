import { useParams } from 'react-router-dom'

import Card from '../../components/Card'
import DailyChart from '../../components/DailyChart'
import ChartsCard from '../../components/ChartsCard'
import ChartAverageSessions from '../../components/ChartAverageSessions'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'


import calories from '../../assets/calories-icon.svg'
import proteins from '../../assets/protein-icon.svg'
import carbs from '../../assets/carbs-icon.svg'
import fat from '../../assets/fat-icon.svg'

import { useState, useEffect } from "react";

import { getResponse } from "../../utils/getResponse"

import './index.css';


export default function Profil() {

    const { userId } = useParams();
    const [errorAPI, setErrorAPI] = useState(false)

    const [formattedData, setFormattedData] = useState(null);
    useEffect(() => {
        const data = async () => {
            const response = await getResponse(userId)
            setFormattedData(response.formattedData);
            setErrorAPI(response.errorAPI)
        }
        data();
    }, []);
    if (formattedData === null) return null;

    if(errorAPI){
        return (
			<section className="profil-wrapper">
				<h2 className="center error-message">Une erreur est survenue. Veuillez réessayer ultérieurement </h2>
			</section>
		)
    }

    return (
        <section className="profil-wrapper">
            <div className="profil">
                <h2 className="profil-title">
                    Bonjour{' '}
                    <span className="profil-firstName">
                        {formattedData.mainData.userInfos.firstName}
                    </span>
                </h2>
                <p className="profil-subtitle">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
                <div className="dashboard">
                    <div className="dashboard-charts-wrapper">

                        <div className="activity-charts">
                            <DailyChart
                                data={formattedData.activity}
                            />
                        </div>


                        <div className="bottom-cards-wrapper">
                            <ChartsCard
                                className="average-sessions"
                                content={
                                    <ChartAverageSessions
                                        data={
                                            formattedData.averageSessions
                                        }
                                    />
                                }
                            />


                            <ChartsCard
                                className="performance"
                                content={
                                    <PerformanceChart
                                        data={formattedData.performance}
                                    />
                                }
                            />

                            <ChartsCard
                                className="score"
                                content={
                                    <ScoreChart
                                        data={formattedData.mainData}
                                    />
                                }
                            />
                        </div>

                    </div>
                    <div className="dashboard-aside">
                        <Card
                            userKeyData={formattedData.mainData.keyData.calorieCount}
                            unit="kCal"
                            subtitle="Calories"
                            className="calorie"
                            logo={calories}
                        />
                        <Card
                            userKeyData={formattedData.mainData.keyData.proteinCount}
                            unit="g"
                            subtitle="Proteines"
                            className="protein"
                            logo={proteins}
                        />
                        <Card
                            userKeyData={formattedData.mainData.keyData.carbohydrateCount}
                            unit="g"
                            subtitle="Glucides"
                            className="carbohydrate"
                            logo={carbs}
                        />
                        <Card
                            userKeyData={formattedData.mainData.keyData.lipidCount}
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