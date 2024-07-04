import React from 'react'
import { useRef } from "react";

   const Newpost = ( {Category,setCategory,Title,setTitle,Content,setContent,Author,
    setAuthor,handlesubmit}) => {

    const categoryOptions = ['Travel', 'Adventure', 'Gaming'];
    const InputRef=useRef()
    
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>


          <div className="col-md-6">
            <h1 className='text-center mt-3'> Add New Post </h1>

            <form className='Addpostform' onSubmit={handlesubmit}>


            <label htmlFor="category">Category</label>
               <input type="text" 
               placeholder='Add category'
               ref={InputRef} 
               name='category'
                value={Category}
                onChange={(e)=>setCategory(e.target.value)}
                /> <br />



               <label htmlFor="Title">Title</label>
               <input type="text" placeholder='Add Title' name='Title'
               value={Title}
               onChange={(e)=>setTitle(e.target.value)}/> <br />

               
               <label htmlFor="content">Content</label>
               <input type="text" placeholder='Add content' name='content'
               value={Content}
               onChange={(e)=>setContent(e.target.value)}
               /> <br />

               <label htmlFor="author">Author</label>
               <input type="text" placeholder='Add Ur Name' name='author'
               value={Author}
               onChange={(e)=>setAuthor(e.target.value)}
               /> <br />
                
                <button className='btn btn-primary mt-2 rounded' onClick={()=>InputRef.current.focus()}>Add Post</button>
               
              
            </form>
          </div>

          <div className="col-md-3"></div>

        </div>
      </div>
    </div>
  )
}

export default Newpost