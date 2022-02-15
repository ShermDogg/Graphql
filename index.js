const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const app = express();
const dotenv =  require("dotenv");
dotenv.config();

const schema = require('./schema');


app.use('/graphql',
 graphqlHTTP({
    schema,
    graphiql:true
})
);


app.listen(process.env.PORT, () => {
    console.log(`App running on PORT ${process.env.PORT}`);
});


  


 
 








    
    

    
    
   
 
 