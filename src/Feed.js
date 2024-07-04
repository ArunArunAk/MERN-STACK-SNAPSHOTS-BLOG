import React from "react";
import Post from "./Post";
import "./Post.css";
import { Link } from "react-router-dom";

const Feed = ({ Posts, search }) => {
  console.log("posts from feeds", Posts);

  const filteredPosts = search
    ? Posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.content.toLowerCase().includes(search.toLowerCase())
      )
    : Posts;
  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-4 mb-2 text-dark">Trending Posts</h1>
        <div className="row">
          
          {filteredPosts.map((post) => (
            <div className="col-md-4 mt-4  key={post.id}> ">

              <Link to={`/${post.id}`} className="card">
                <div className="card ">
                  <Post post={post} />
                </div>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
