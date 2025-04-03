import React, { useRef } from "react";

const CreatePost = ({fetchPosts}) => {
  const textInputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await fetch("http://localhost:8080/posts/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                text: textInputRef.current.value
            })
        })

        const data = await response.json()
        console.log(data);
        textInputRef.current.value = ""
       
        fetchPosts()

    }catch(err){
        console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={textInputRef} required placeholder="text" />
      <button>Create</button>
    </form>
  );
};

export default CreatePost;
