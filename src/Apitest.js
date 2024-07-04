import React from 'react'
import { useEffect,useState } from 'react'


const Apitest = () => {

     const API_URL=' http://localhost:3500/Details'
     const [data, setData] = useState([]);
     
     const [isloading,setisloading]= useState(true);

    
  
     useEffect(()=>{
       const fetchitem=async()=>{
         try{
              const response= await fetch(API_URL) 
              console.log(response)
              const listitems=await response.json();
              console.log(listitems)
              setData(listitems);
         }catch(error){
            console.log(error.stack)
         }finally{
            setisloading(false) 
         }
       }
        
      (async()=> await fetchitem())()

     },[]) 

     


  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12">
             <h1 className='text-center mt-5 mb-3'>SnapStories Blog Details</h1>

        <table className="table table-striped">
        <thead>
            {isloading && <p className='text-center'>Loading...</p>}
              <tr>
                <th scope="col"> ID</th>
                <th scope="col">Name</th>
                <th scope="col">Topics</th>
                <th scope="col">Grade</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.food_id}>
                    {/* Display specific properties from each item */}
                    <td>{item.food_id}</td>
                    <td>{item.name}</td>
                    <td>{item.food_name}</td>
                    <td>{item.grade}</td>
                    <td>
                         <button className='btn btn-primary'>Edit</button>  &nbsp;
                         <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">No data found.</td>
                </tr>
              )}
              
            </tbody>
          </table>

        </div>
    </div>
 
   



 </div>


   
  )

}

export default Apitest