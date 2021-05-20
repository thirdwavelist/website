import ReactDOM from 'react-dom';
import { createHttpLink, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root'),
); 
