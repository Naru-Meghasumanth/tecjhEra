import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = ({course}) => {
  const {id, name, logo_url} = course
  const logoUrl = logo_url

  return (
    <li className="course-item">
      <Link to={`/courses/${id}`} className="course-item-link">
        <img src={logoUrl} alt={name} className="course-logo" />
        <p className="course-name">{name}</p>
      </Link>
    </li>
  )
}

export default CourseItem
