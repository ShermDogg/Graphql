 import React from 'react'
 
 import { useQuery, gql } from '@apollo/client';
 
 
 
 

 const launches = gql`

 query LaunchesQuery{
    launches{
      mission_name,
      flight_number
      
    }
  }
 
 
 
 `
 
 

 
 function Launches() {
    const { loading, error, data } = useQuery(launches);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
   return (
     <div>
         <h1 className='display-4 my-3'>
             Launches

         </h1>
         
         <div>
         
         {data.launches.map((data)=>(
           <p key={data.mission_name}>
             {data.mission_name}
           </p>
         ))

         }
         </div>

         
         </div>
   )
 }
  export default Launches;