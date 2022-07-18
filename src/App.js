import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import BookList from './components/BookList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

// // fetching data 
// client.query({
//   query: gql`
//     {
//       books{
//           name
//           id
//           author{
//             name
//             age
//           }
//       }
//     }
// `
// })
//   .then((result) => console.log(result))
//   .catch(error => console.log(error));

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
