export class FormatData {
    constructor(data) {

        this.mainData = {
            userId: data.USER_MAIN_DATA?.id || data.USER_MAIN_DATA?.userId,
            userInfos: data.USER_MAIN_DATA.userInfos,
            todayScore: data.USER_MAIN_DATA.todayScore || data.USER_MAIN_DATA.score,
            keyData: data.USER_MAIN_DATA.keyData
        }

        this.activity = data.USER_ACTIVITY.sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        }))

        this.averageSessions = data.USER_AVERAGE_SESSIONS.sessions.map(session => ({
            day: formattedDay[session.day],
            sessionLength: session.sessionLength
        }))

        this.performance = data.USER_PERFORMANCE.data.map(data => ({
            value: data.value,
            kind: formattedKind[data.kind],
        }))

    }
}

const formattedKind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }
const formattedDay = { 1: 'L', 2: 'M', 3: 'Me', 4: 'J', 5: 'V', 6: 'S', 7: 'D' } 
