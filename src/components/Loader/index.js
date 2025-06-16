import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const LoadingView = () => (
  <div data-testid="loader" className="loader-container">
    <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
  </div>
)

export default LoadingView
