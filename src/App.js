import Nav from "./Nav";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import "./App.css";
import Register from './Register';
import Apitest from './Apitest';
import TasktTwo from './TasktTwo';
import Post from "./Post";

import About from "./About";
import Miising from "./Miising";
import Footer from "./Footer";
import Postlayout from "./Postlayout";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast styling
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling
import { format } from "date-fns";
import Login from "./Login ";
import { useLocation } from "react-router-dom";
import Editpost from "./Editpost";
import Contact from "./Contact";
import 'react-toastify/dist/ReactToastify.css';

import { Dataprovider } from "./context/Data.context";



 

import api from "./postsapi";




function App() {

  const [Posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchposts=async()=>{
      try{
      const response=await api.get('/posts')
      setPosts(response.data)
      // console.log(Posts,"Posts from apppps")
      }catch(error){
        if(error.response){
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)

        }else{
          console.log(`Error: ${error.message}`)
        }

      }
    }
    fetchposts();
  })


  const [search, setSearch] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [Category, setCategory] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Author, setAuthor] = useState("");

  const handleDelete= async (id)=>{
    // const postlist=Posts.filter(post=> post.id !== id)
    // setPosts(postlist)
    const response = await api.delete(`/posts/${id}`); 

        navigate("/");
        toast.warning("Post Delete successfully!", {
          position: "top-right", // Customizable position
        
        });
  }

const navigate = useNavigate();
const location = useLocation(); // Hook to get the current location

const [editCategory, seteditCategory] = useState("");
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");
  const [editAuthor, seteditAuthor] = useState("");

const handlesedit=async(id) =>{
  const date1=format(new Date(),'MMMM dd,yyyy')
  const updatedpost={id:id,category:editCategory,title:editTitle,content:editContent,author:editAuthor,date:date1}
  try{
     const response=await api.put(`/posts/${id}`,updatedpost)
     setPosts(Posts.map(post=>post.id === id?{...response.data}:post))
     seteditCategory(' ');
     seteditContent(' ');
     seteditTitle(' ');
     seteditAuthor(' ');
    navigate("/");
    toast.success("Post updated successfully!", {
      position: "top-right", // Customizable position
      
    });  }catch(error){
    console.log(`Error: ${error.message}`)

  }
}
// const handleupdatepage=() =>{
//   navigate('/Editpost')
// }

// utils.js
 const isUserLoggedIn = () => {
  const userDetails = localStorage.getItem('userDetails');
  return userDetails !== null;
};



const handlesubmit=async(e) =>{
   e.preventDefault();
   console.log(Posts.length,"posts length")
   const id=Posts.length ? Posts[Posts.length-1].id +1 : 1;
  const date1=format(new Date(),'MMMM dd,yyyy')

   const newpost={id:id,category:Category,title:Title,content:Content,author:Author,date:date1}

   const response=await api.post('/posts',newpost)

  //  const newone=[...Posts,newpost]
  //  setPosts(newone); 

   setCategory(' ');
   setContent(' ');
   setTitle(' ');
   setAuthor(' ');
    navigate("/"); // Redirect to the root path (/)

 toast.success("Post added successfully!", {
  position: "top-right", // Customizable position
 
});


}



  return (
    <div>

      {/* <Dataprovider> */}


       <ToastContainer /> 

       {location.pathname !== "/login" && location.pathname !== "/register" && <Nav search={search} setSearch={setSearch} isUserLoggedIn={isUserLoggedIn} />} {/* Conditionally render Nav */}

     
      <Routes>

        <Route path="/" element={<Home
        Posts={Posts}
        search={search}
        
    />} />
        <Route path="/:id" element={<Postpage
        Posts={Posts}
        handleDelete={handleDelete}
        />} />

        <Route path="/Home" element={<Home />} />


        <Route path="/Newpost" element={<Newpost 

         Category={Category}
         setCategory={setCategory}
         Title={Title}
         setTitle={setTitle}
         Content={Content}
         setContent={setContent}
          Author={Author}
          setAuthor={setAuthor}
          handlesubmit={handlesubmit}
          editCategory={editCategory}
          seteditCategory={seteditCategory}
          editTitle={editTitle}
          seteditTitle={seteditTitle}
          editContent={editContent}
          seteditContent={seteditContent}
          editAuthor={editAuthor}
          seteditAuthor={seteditAuthor}
        />} />
       
        <Route path="/Editpost/:id" element={<Editpost
         editCategory={editCategory}
         seteditCategory={seteditCategory}
         editTitle={editTitle}
         seteditTitle={seteditTitle}
         editContent={editContent}
         seteditContent={seteditContent}
         editAuthor={editAuthor}
         seteditAuthor={seteditAuthor}
         handlesedit={handlesedit}
         Posts={Posts}
        />} />

        <Route path="/Postpage" element={<Postpage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Miising" element={<Miising />} />

        <Route path="/Register" element={<Register />} />
        <Route path="/Apitest" element={<Apitest />} />
        <Route path="/TasktTwo" element={<TasktTwo />} />

        <Route path="/post" element={<Post  />} />

        <Route path="/login" element={<Login  />} />

        <Route path="/postlayout" element={<Postlayout />} />
        <Route path="/contact" element={<Contact  />} />




{/* admin dashboard */}
       {/* <Route path="/Postpage" element={<Postlayout/>} >
           <Route index element={<Posts />} />     
           <Route path=":id" element={<Posts />} />
           <Route path="newpost" element={<Newpost />} />
        </Route> */}
{/* admin dashboard */}

        <Route path="*" element={<Miising />} />




      </Routes>
     
      {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />} {/* Conditionally render Footer */}
      {/* </Dataprovider> */}
   
    </div>
  );
}
 
export default App;
