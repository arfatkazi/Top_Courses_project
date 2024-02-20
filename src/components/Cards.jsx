import { useState } from "react"
import Card from "./Card"

const Cards = ({ courses }) => {
	let [likedCourses, setLikedCourses] = useState([])
	console.log(`printing courses`)
	console.log(courses)

	const getCourses = () => {
		let allCourses = []
		Object.values(courses).forEach((courseCategory) => {
			courseCategory.forEach((course) => {
				allCourses.push(course)
			})
		})
		return allCourses
	}
	return (
		<>
			<div className="cards">
				{getCourses().map((course) => {
					return (
						<Card
							key={course.id}
							course={course}
							likedCourses={likedCourses}
							setLikedCourses={setLikedCourses}
						></Card>
					)
				})}
			</div>
		</>
	)
}

export default Cards
