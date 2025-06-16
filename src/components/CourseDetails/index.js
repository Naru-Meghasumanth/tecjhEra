import {useParams} from 'react-router-dom'
import {useState, useEffect, useCallback} from 'react'
import Loader from '../Loader'
import FailureView from '../FailureView'
import Header from '../Header'
import './index.css'

const CourseDetails = () => {
  const {id} = useParams()
  const [course, setCourse] = useState(null)
  const [status, setStatus] = useState('INITIAL')

  const getCourseDetails = useCallback(async () => {
    setStatus('IN_PROGRESS')
    try {
      const resp = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
      if (resp.ok) {
        const data = await resp.json()
        setCourse(data.course_details)
        setStatus('SUCCESS')
      } else {
        setStatus('FAILURE')
      }
    } catch {
      setStatus('FAILURE')
    }
  }, [id])

  useEffect(() => {
    getCourseDetails()
  }, [getCourseDetails])

  const renderDetails = () => {
    const {name, description, image_url} = course
    const imgUrl = image_url

    return (
      <div className="course-details-container">
        <img src={imgUrl} alt={name} className="course-image" />
        <div className="text-content">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (status) {
      case 'SUCCESS':
        return renderDetails()
      case 'FAILURE':
        return <FailureView retry={getCourseDetails} />
      case 'IN_PROGRESS':
        return <Loader />
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      {renderContent()}
    </>
  )
}

export default CourseDetails
