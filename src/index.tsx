import React from 'react';
import ReactDOM from 'react-dom';
import { createHttpLink, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
