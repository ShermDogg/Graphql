import React from 'react';
 import Image from "react-bootstrap/Image";
 import ReactPlayer from "react-player";
 import '../App.css';
 import Launch from './Launch';

 import { useQuery, gql } from '@apollo/client';

 
 
 
 

 const launches = gql`

 query LaunchesQuery{
    launches{
      flight_number,
      launch_success,
      mission_name,
      launch_date_local
      
      links {
        video_link,
        mission_patch_small,
        article_link
      }
      
    }
  }
 
 
 
 `
 
 

 
 function Launches () {
    const { loading, error, data } = useQuery(launches);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
   return (
     
     <Fragment>
       
       
         <h1 className='display-4 my-3'>  Launches </h1>
         {data.launches.map((data)=>(
             <Launch key={launches.flight_number} launch={Launch}  />
           
           
           
           
          
          
         ))

         }
         
        
        
         
        
        
         
         
         </Fragment>
   )
 }
  export default Launches;