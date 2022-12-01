import PropTypes from 'prop-types'

function Card({ children, reverse }) {

  // CONDITIONAL CLASS METHOD
  // conditional class: if reverse is true, then make the className be
  // card.reverse instead of just card
  /*
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
  */

  // CONDITIONAL STYLE METHOD
  return (
    <div className='card' style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#ffff',
      color: reverse ? '#ffff' : '#000'
    }}>{children}</div>
  )
}

Card.defaultProps={
  reverse: false
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card