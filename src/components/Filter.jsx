const Filter = ({ filterData }) => {
	// const filtersHandler = () => {}
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
					return (
						<button
							key={data.id}
							// onClick={filtersHandler}
						>
							{data.title}
						</button>
					)
				})}
			</div>
		</>
	)
}

export default Filter
