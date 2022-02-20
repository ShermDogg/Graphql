import spacex from './spacex.png';
import Launches from './components/Launches';
import Header from './components/Header';
import {Routes, Route} from'react-router-dom';








import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
 
  
} from "@apollo/client";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


function App({data}) {
  return (
  
    
    <ApolloProvider client={client}>
      
       
          
    <div className="container">
      <Routes>
        <Route path='/' element={<Header />} />
        
      </Routes>


      <img src={spacex} alt="spacex" style={{
        width:300, display: 'block', margin: 'auto'
      }}/>
      
      <Launches />
      
    </div>
    
    </ApolloProvider>
  
  );
}

export default App;
