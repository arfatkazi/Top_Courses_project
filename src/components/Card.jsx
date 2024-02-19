import React from "react"
import { FcLike } from "react-icons/fc"

const Card = ({ course }) => {
	return (
		<>
			<div className="card-container">
				<div className="course-img">
					<img src={course.image.url}></img>
				</div>

				<div>
					<button>
						<FcLike className="like-icon"></FcLike>
					</button>
				</div>

				<div className="course-details">
					<h4>{course.title}</h4>
					<p>{course.description}</p>
				</div>
			</div>
		</>
	)
}

export default Card
