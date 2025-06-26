import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = ({course}) => {
  const {id, name, logo_url} = course
  const logoUrl = logo_url

  return (
    <Link to={`/courses/${id}`} className="course-item-link">
      <li className="course-item">
        <img src={logoUrl} alt={name} className="course-logo" />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
