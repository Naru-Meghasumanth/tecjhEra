import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
    </Link>
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found.</p>
  </div>
)

export default NotFound
