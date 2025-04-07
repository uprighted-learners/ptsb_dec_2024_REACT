import React from "react";

const Post = ({ post, fetchPosts }) => {
  console.log(post);

  const handleDelete = async (postid) => {
    console.log(postid);
    try{
      const response = await fetch(`http://localhost:8080/posts/delete/${postid}`, {
        method: "DELETE",
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })

      const data = await response.json()

      if(data.Deleted){
        fetchPosts()
      } else {
        throw new Error("Error deleting post")
      }

    }catch(err){
      console.log(err)
    }
  };

  return (
    <div
      style={{
        border: ".3em solid rebeccapurple",
        borderRadius: ".3em",
        marginTop: "1em",
        position: "relative",
        padding: "1em",
      }}
    >
      <h5>{new Date(post.createdAt).toLocaleString()}</h5>
      <h5>{post.text}</h5>
      <h4>
        {post.user_id.firstName} {post.user_id.lastName}
      </h4>

      {post.user_id._id === localStorage.getItem("uid") && (
        <button
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: ".6em",
            borderRadius: "50%",
            fontSize: ".6em",
          }}
          onClick={() =>  handleDelete(post._id)}
        >
          ❌
        </button>
      )}
    </div>
  );
};

export default Post;
