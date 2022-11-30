// note... don't need to include file extension (Header is .jsx)
import Header from "./components/Header"
import FeedbackItem from './components/FeedbackItem'

function App(){

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}

export default App