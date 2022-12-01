import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
  /*
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is example text for feedback')

  const handleClick = () => {
    setRating((prev) => {
      return prev + 1
    });
  }
  */

  return (
    <Card reverse={true} >
      <div className='num-display'>{item.rating}</div> 
      <div className='text-display'>{item.text}</div>
    </Card>
  )
  /*

  // This is functionally, what is created via the reserved parameter
  // 'children' in Card.jsx. (Not considering reverse or any other)
  // paramterers that might be passed to card after this comment

  return (
  <div className='card'>
    <div className='num-display'>{item.rating}</div> 
    <div className='text-display'>{item.text}</div>
  </div>
 )
 */
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem
