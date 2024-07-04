import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


const Postpage = ( {Posts,handleDelete} ) => {
    const {id}=useParams();
    console.log("post from postpage",Posts)
       const post=Posts.find(post => (post.id).toString() === id)
       console.log(post,"particualr one")

       const isUserLoggedIn = () => {
        const userDetails = localStorage.getItem('userDetails');
        return userDetails !== null;
      };


  return (
            
    <div>
            {post ? (
            <div className="card mt-3 p-5 m-5">
              <div className="container">
                <h1 className="text-center mt-5 text-primary">{post.title}</h1>
                <h4 className="text-dark ">Category: {post.category}</h4>
                {/* <p className="text-dark >{}</p> */}
                <p className="text-dark mt-2 ">{post.content}</p>
                <h3 className="text-dark mt-2 text-left ">Post By:{post.author}</h3>

                <h3 className="text-dark mt-2 text-right ">Date:{post.date}</h3>
              </div>
              <div>

        
              {/* <button className="btn btn-danger " style={{width:200 ,}} onClick={()=>{handleDelete(post.id)}}>Delete Post</button > &nbsp;  &nbsp;
              
              <Link to={`/Editpost/${post.id}`}>
              <button className="btn btn-warning " style={{width:200 }} >Update Post</button>

              </Link> */}
              {isUserLoggedIn() && (
                            <>
                                <button className="btn btn-danger" style={{ width: 200 }} onClick={() => { handleDelete(post.id) }}>Delete Post</button> &nbsp; &nbsp;
                                <Link to={`/Editpost/${post.id}`}>
                                    <button className="btn btn-warning" style={{ width: 200 }}>Update Post</button>
                                </Link>
                            </>
                        )} 

              </div>
            
              </div>


            ):(<p className="text-center">This post not available</p>)}  
    </div>
       


      

   
  );
};

export default Postpage;
