import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses/:id" element={<CourseDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
