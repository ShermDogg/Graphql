import spacex from './spacex.png';
import Launches from './components/Launches';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}> 
    <div className="container">
      <img src={spacex} alt="spacex" style={{
        width:300, display: 'block', margin: 'auto'
      }}/>
      <Launches />
    </div>
    </ApolloProvider>
  );
}

export default App;
