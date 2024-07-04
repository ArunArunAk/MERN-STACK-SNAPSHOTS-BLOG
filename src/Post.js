import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";



const Post = ({ post }) => {
  console.log("post is:", post); // Corrected console log
  return (
    <div>
    <div className="card-body">
        <h5 className="card-title text-success">{post.title}</h5>
        <p className="card-text">
          {post.content.length > 200
            ? `${post.content.slice(0, 200)}...`
            : post.content}
        </p>
      </div>
      <div className="card-footer text-muted">
        <small className="text-warning">By {post.author}</small> &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <small className="text-dark ">{post.date}</small>
      </div>
    </div>
  );
};

export default Post;
  

