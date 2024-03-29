import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
	PolarRadiusAxis,
	Text,
} from 'recharts'

function PerformanceChart({ data }) {

	const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
		return (
			<Text
				{...rest}
				verticalAnchor="middle"
				y={y + (y - cy) / 10}
				x={x + (x - cx) / 100}
				fill="#FFFFFF"
				fontSize="0.75rem"
			>
				{payload.value}
			</Text>
		)
	}

	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius={90} data={[...data].reverse()}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="kind"
						tick={(props) => renderPolarAngleAxis(props)}
					/>
					<PolarRadiusAxis
						tickCount={6}
						tick={false}
						axisLine={false}
					/>
					<Radar
						dataKey="value"
						stroke="#FF0101"
						fill="#FF0101"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</>
	)
}

export default PerformanceChart
