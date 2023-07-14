import './index.css'


function ChartsCard({ className, content }) {
	return <div className={'charts-card ' + className}>{content}</div>
}


export default ChartsCard