import "./App.css"
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"
import { apiUrl, filterData } from "./data"
import { useState } from "react"
import { useEffect } from "react"
import { toast } from "react-toastify"

function App() {
	const [courses, setCourses] = useState(null) //INSTEAD OF NULL WE USE EMPTY ARRAY []
	const [loading, setLoading] = useState(true)
	const [category, setCategory] = useState(filterData[0].title)
	async function fetchData() {
		setLoading(true)
		try {
			let response = await fetch(apiUrl)
			let output = await response.json()
			setCourses(output.data)
		} catch (error) {
			toast.error("Network Problem")
		}
		setLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<>
			<div className="contains">
				<div>
					<Navbar></Navbar>
				</div>
				<div>
					<Filter
						filterData={filterData}
						category={category}
						setCategory={setCategory}
					></Filter>
				</div>

				<div>
					{loading ? (
						<Spinner />
					) : (
						<Cards
							courses={courses}
							category={category}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default App
