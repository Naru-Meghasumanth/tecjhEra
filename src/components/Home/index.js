import {useEffect, useState} from 'react'
import Loader from '../Loader'
import FailureView from '../FailureView'
import CourseItem from '../CourseItem'
import Header from '../Header'
import './index.css'

const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [status, setStatus] = useState('INITIAL')

  const fetchCourses = async () => {
    setStatus('IN_PROGRESS')
    try {
      const resp = await fetch(coursesApiUrl)
      if (resp.ok) {
        const data = await resp.json()
        setCourses(data.courses)
        setStatus('SUCCESS')
      } else {
        setStatus('FAILURE')
      }
    } catch {
      setStatus('FAILURE')
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const renderCoursesList = () => (
    <ul className="courses-list">
      {courses.map(each => (
        <CourseItem key={each.id} course={each} />
      ))}
    </ul>
  )

  const renderContent = () => {
    switch (status) {
      case 'SUCCESS':
        return (
          <>
            <h1 className="home-heading">Courses</h1>
            {renderCoursesList()}
          </>
        )
      case 'FAILURE':
        return <FailureView retry={fetchCourses} />
      case 'IN_PROGRESS':
        return <Loader />
      default:
        return null
    }
  }

  return (
    <div className="home-container">
      <Header />
      {renderContent()}
    </div>
  )
}

export default Home
