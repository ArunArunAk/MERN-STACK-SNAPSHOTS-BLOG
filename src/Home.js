import React, { useContext } from 'react'
import Feed from './Feed'
import Datacontext from './context/Data.context'

const Home = ( {Posts,search,setSearch,filteredPosts} ) => {
  console.log("post from home",Posts)

  // const {Posts,search}=useContext(Datacontext)
  
  return (
    <div>
      {Posts.length ?(<Feed Posts={Posts } search={search}  />):(<p className='text-center mt-5'>Currently No Post Is Available</p>)}
    </div>
  )
}

export default Home