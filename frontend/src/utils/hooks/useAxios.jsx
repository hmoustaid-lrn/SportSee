import axios from 'axios'


export function useAxios(endpoints) {
	
	return axios
		.all(endpoints.map((endpoint) => axios.get(endpoint)))
		.then(axios.spread((...responses) => {
			const [USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, USER_ACTIVITY] = responses.map(response => response.data.data);
			return {
				USER_MAIN_DATA,
				USER_AVERAGE_SESSIONS,
				USER_PERFORMANCE,
				USER_ACTIVITY
			};
		}))
}
