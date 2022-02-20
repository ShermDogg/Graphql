 import React from 'react';
 import { Link } from 'react-router-dom';
 import {Image,Col,Row} from "react-bootstrap";
 import ReactPlayer from "react-player";
 import '../App.css';
 

 import { useQuery, gql } from '@apollo/client';

 
 
 
 

 const launches = gql`

 query LaunchesQuery{
    
  launches {
    mission_name
    launch_date_local
    launch_year
    
    links {
      video_link
      article_link
      mission_patch,
      mission_patch_small
    }
    rocket {
      rocket_name
      rocket_type
      
      
    }
  }
}

 
 `
 
 

 
 function Launches () {
    const { loading, error, data } = useQuery(launches);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
   return (
     
     <div className='container'>
       
       
         <h1 className='display-4 my-3'>
             Launches

         </h1>
         
         <div>
           
         
         {data.launches.map((data)=>(
           
           
           
           
          
           <div class="card border-info  mb-3" key={data.mission_name}>
             <Row>
               
           <h3 className="card-header">{data.mission_name}</h3>
           </Row>
           <div class="card-body">
             <h5 class="card-title">Launch Year :</h5>
             <h6 class="card-subtitle text-muted">{data.launch_year}</h6>
             
             <Row>
               
             <Image src={data.links.mission_patch_small}>
                   
                   
                   </Image>
                   <Col>
                   </Col>
                   <Col>
                   
                   
                   </Col>
                   
                   </Row>
           </div>
          
          
           <ReactPlayer
                  controls ="true"
                  pip
                  width="100%"
        url={data.links.video_link} 
        
        
      />
           
           <div class="card-body">
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">{data.rocket.rocket_name}</li>
             <li class="list-group-item">{data.rocket.rocket_type}</li>
             
             
           </ul>
           <div class="card-body">
             <a href={data.links.article_link} class="card-link">Launch Link</a>
             
           </div>
           <div class="card-footer text-muted">
             
           </div>
         </div>
         ))

         }
         </div>
         
        
        
         
         
         </div>
   )
 }
  export default Launches;