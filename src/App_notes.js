function App(){

  const title = 'Blog Post'
  const body = 'This is my blog post'
  // en/disables replacing all on-page text with "Loading..."
  const loading = false
  // en/disables the comment code in the ternary operator below
  const showComments = true
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'},
  ]

  if (loading === true){
    return <h1>Loading...</h1>
  }


  const commentBlock=
    (<div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) =>(
          <li key = {index}>{comment.text}</li>
        ))}
      </ul>
    </div>)

/*
Alternatively, {showComments && commentBlock}
will only load commentBlock if showComments is true
*/
  return (
  <div className= 'container'> 
    <h1>{title.toUpperCase()}</h1>
    <p>{body}</p>
  {showComments ? 
    commentBlock
    :'no'}
  </div>
  )
}

export default App