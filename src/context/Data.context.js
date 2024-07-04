import { Children, createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast styling
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import api from "../postsapi";



const Datacontext=createContext({})

export const Dataprovider=({Children})=>{

    const [Posts, setPosts] = useState([]);

    useEffect(()=>{
      const fetchposts=async()=>{
        try{
        const response=await api.get('/posts')
        setPosts(response.data)
        console.log(Posts,"Posts from apppps")
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
            autoClose: 30000, // Automatically close after 3 seconds
            hideProgressBar: true, // Optionally hide the progress bar
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
        autoClose: 30000, // Automatically close after 3 seconds
        hideProgressBar: true, // Optionally hide the progress bar
      });  }catch(error){
      console.log(`Error: ${error.message}`)
  
    }
  }
  // const handleupdatepage=() =>{
  //   navigate('/Editpost')
  // }
  
  
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
    autoClose: 30000, // Automatically close after 3 seconds
    hideProgressBar: true, // Optionally hide the progress bar
  });
  
  
  }
  
  


    return (
        <Datacontext.Provider value={{
            Posts,search
        }}>
            {Children}
        </Datacontext.Provider>
    )
}

export default Datacontext;