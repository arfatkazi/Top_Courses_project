const Filter = ({ filterData, category, setCategory }) => {
	const filterHandler = (e) => {
		console.log(`clicked`)
		console.log(e.target)
	}

	const filtersClickHandler = (title) => {
		setCategory(title)
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
							onClick={() => filtersClickHandler(data.title)}
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
