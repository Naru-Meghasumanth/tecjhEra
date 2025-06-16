import './index.css'

const FailureView = ({retry}) => (
  <div className="failure-view-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
      className="failure-image"
    />
    <h1>Oops! Something Went Wrong</h1>
    <p>We cannot seem to find the page you are looking for</p>
    <button type="button" onClick={retry} className="retry-button">
      Retry
    </button>
  </div>
)

export default FailureView
