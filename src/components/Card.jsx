import React from "react"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify"

const Card = ({ course, likedCourses, setLikedCourses }) => {
	const likedHandler = () => {
		if (likedCourses.includes(course.id)) {
			//like hoto remove karo
			setLikedCourses((prev) => prev.filter((cid) => cid !== course.id))
			toast.warning("Like Removed")
		} else {
			if (likedCourses.length === 0) {
				setLikedCourses([course.id])
			} else {
				setLikedCourses((prev) => [...prev, course.id])
			}
			toast.success("Liked Successfully")
		}
	}
	return (
		<>
			<div className="card-container">
				<div className="course-img">
					<img src={course.image.url}></img>
					<div className="like-icon">
						<button onClick={likedHandler}>
							{likedCourses.includes(course.id) ? (
								<FcLike className="icons" />
							) : (
								<FcLikePlaceholder className="icons" />
							)}
						</button>
					</div>
				</div>

				<div className="course-details">
					<h4>{course.title}</h4>
					<p>
						{course.description.length > 100
							? course.description.substring(0, 190) + "..."
							: course.description}
					</p>
				</div>
			</div>
		</>
	)
}

export default Card
