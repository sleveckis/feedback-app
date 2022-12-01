// note... don't need to include file extension (Header is .jsx)
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import {useState} from 'react'

function App(){

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
}

export default App