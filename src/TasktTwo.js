import React from "react";
import "./Task.css";
import { useEffect, useState } from "react";

const TasktTwo = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const API_URL1 = "https://jsonplaceholder.typicode.com/users";
  const API_URL2 = "https://jsonplaceholder.typicode.com/comments";

  const [data, setData] = useState([]);
  const [users, setusers] = useState([]);
  const [comments, setcomments] = useState([]);
  const [activeView, setActiveView] = useState("posts");

  useEffect(() => {
    const fetchitem = async () => {
      try {
        const response1 = await fetch(API_URL);
        const response2 = await fetch(API_URL1);
        const response3 = await fetch(API_URL2);

        console.log(response1);
        console.log(response2);
        console.log(response3);

        const listitems1 = await response1.json();
        const listitems2 = await response2.json();
        const listitems3 = await response3.json();

        console.log(listitems1);
        console.log(listitems2);
        console.log(listitems3);

        setData(listitems1);
        setusers(listitems2);
        setcomments(listitems3);
      } catch (error) {
        console.log(error.stack);
      }
    };

    (async () => await fetchitem())();
  }, []);

  const handleUserClick = () => {
    console.log("User button clicked");
    setActiveView("users");
  };

  const handleCommentsClick = () => {
    console.log("Comments button clicked");
    setActiveView("comments");
  };

  const handlePostsClick = () => {
    console.log("Posts button clicked");
    setActiveView("posts");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <button rounded
            onClick={() => {
              handleUserClick();
            }}
          >
        SnapStories-Users
          </button>
        </div>

        <div className="col-md-4">
          <button
            onClick={() => {
              handleCommentsClick();
            }}
          >
             SnapStories -Comments
          </button>
        </div>

        <div className="col-md-4">
          <button
            onClick={() => {
              handlePostsClick();
            }}
          >
             SnapStories-Posts
          </button>
        </div>
      </div>

      {activeView === "posts" && data.length > 0 ? (
        <ul className="tasklist1" >
          {data.map((item) => (
            <li key={item.id}>
              {/* Access data from other arrays based on relationships */}
              {item.id}, {item.title}, {item.body},
            </li>
          ))}
        </ul>
      ):null} 

      {activeView === "users" && users.length > 0 ? (
        <ul className="tasklist2"  >
          {users.map((item) => (
            <li key={item.id}>
              {/* Display user data */}
              {item.id}, {item.name}, {item.username}, {item.email}, ...
            </li>
          ))}
        </ul>
      ):null}

      {activeView === "comments" && comments.length > 0 ? (
        <ul className="tasklist3" >
          {comments.map((item) => (
            <li key={item.id}>
              {/* Display comment data */}
              {item.id}, {item.name}, {item.email}, {item.body}, ...
            </li>
          ))}
        </ul>
      ):null}
    </div>
  );
};

export default TasktTwo;
