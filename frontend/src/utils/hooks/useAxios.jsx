import { useEffect, useState } from 'react'
import axios from 'axios'


export function useAxios(endpoints) {
	const [data, setData] = useState(null)

	useEffect(() => {
		axios
			.all(endpoints.map((endpoint) => axios.get(endpoint)))
			.then(axios.spread(({data: USER_MAIN_DATA}, {data:USER_AVERAGE_SESSIONS}, {data:USER_PERFORMANCE}, {data:USER_ACTIVITY}) => {
				setData({USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, USER_ACTIVITY})
			}))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {data}
}
