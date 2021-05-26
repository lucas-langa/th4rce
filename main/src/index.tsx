import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { fetchPeople } from './features/people/peopleSlice';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from '@apollo/client';
import client from './features/apollo/client';
import { BrowserRouter } from 'react-router-dom';
store.dispatch(fetchPeople());

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
