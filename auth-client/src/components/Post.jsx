import React from 'react'

const Post = ({post}) => {
    console.log(post);
  return (
    <div style={{border: ".3em solid rebeccapurple", borderRadius:".3em", marginTop:"1em", position: "relative", padding: "1em"}}>
        
        <h5>{new Date(post.createdAt).toLocaleString()}</h5>
        <h5>{post.text}</h5>
        <h4>{post.user_id.firstName} {post.user_id.lastName}</h4>

        
    </div>
  )
}

export default Post