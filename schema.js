const {GraphQLObjectType, GraphQLInt,
     GraphQLString, GraphQLBoolean,
      GraphQLList,GraphQLSchema } = require('graphql');
const axios = require('axios');




//launches
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    
    fields: () => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        rocket: {type: RocketType},
        links: {type: LinksType},
        
      
        
       
        


    })
});



// Rocket type

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    
    fields: () => ({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString},

      
        
        
        


    })
});



const LinksType = new GraphQLObjectType({
    name: 'Links',
    
    fields: () => ({
        mission_name:{type: GraphQLString},
        mission_patch:{type: GraphQLString},
        mission_patch_small:{type: GraphQLString},
        video_link: {type: GraphQLString},
        article_link:{type:GraphQLString},
        
        
        
        
        


    })
});




//root query

const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent,args) {
                return axios.get('https://api.spacexdata.com/v3/launches?limit=6')
                .then(res => res.data);


            }

        },
        launch:{
            type: LaunchType,
            args:{
                flight_number: {type: GraphQLInt}


            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                .then(res => res.data);


            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent,args) {
                return axios.get('https://api.spacexdata.com/v3/rockets')
                .then(res => res.data);


            }

        },
        
        
        links: {
            type: new GraphQLList(LinksType),
            resolve(parent,args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                .then(res => res.data);


            }
    },
    
    

        rocket:{
            type: RocketType,
            args:{
                id: {type: GraphQLInt}


            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/launches/rockets${args.id}`)
                .then(res => res.data);


            }
            
        }

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});