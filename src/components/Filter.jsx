const Filter = ({ filterData }) => {
	const filterHandler = (e) => {
		console.log(`clicked`)
		console.log(e.target)
	}
	return (
		<>
			<div
				className="filter-btn"
				onClick={filterHandler}
			>
				{filterData.map((data) => {
					return <button key={data.id}>{data.title}</button>
				})}
			</div>
		</>
	)
}

export default Filter
