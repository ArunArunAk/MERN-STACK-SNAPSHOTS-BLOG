import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ( {editCategory,seteditCategory,editTitle,seteditTitle,
    editContent,seteditContent,editAuthor,seteditAuthor,handlesedit,Posts} ) => {
 
 const {id}=useParams()
 const post=Posts.find(post => (post.id).toString() === id)
  
 useEffect(()=>{
    seteditCategory(post.category)
    seteditTitle(post.title)
    seteditContent(post.content)
    seteditAuthor(post.author)
 },seteditCategory,seteditTitle.seteditContent,seteditAuthor,post)
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>


        <div className="col-md-6">
          <h1 className='text-center mt-3'> Edit Post </h1>

          <form className='Addpostform' onSubmit={(e)=>{e.preventDefault()}}>


          <label htmlFor="category">Category</label>
             <input type="text" 
             placeholder='Add category'
             name='category'
              value={editCategory}
              onChange={(e)=>seteditCategory(e.target.value)}
              /> <br />



             <label htmlFor="Title">Title</label>
             <input type="text" placeholder='Add Title' name='Title'
              value={editTitle}
              onChange={(e)=>seteditTitle(e.target.value)}/> <br />

             
             <label htmlFor="content">Content</label>
             <input type="text" placeholder='Add content' name='content'
              value={editContent}
              onChange={(e)=>seteditContent(e.target.value)}
             /> <br />

             <label htmlFor="author">Author</label>
             <input type="text" placeholder='Add Ur Name' name='author'
              value={editAuthor}
              onChange={(e)=>seteditAuthor(e.target.value)}
             /> <br />
              
              <button className='btn btn-primary mt-2 rounded' onClick={()=>{handlesedit(post.id)}}>Edit Post</button>
             
            
          </form>
        </div>

        <div className="col-md-3"></div>

      </div>
    </div>
  </div>
  )
}

export default Editpost