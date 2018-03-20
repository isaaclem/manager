import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDD80tsVFhPDIiGNNR44m6q9GtkwGJPPXQ',
      authDomain: 'manager-d5341.firebaseapp.com',
      databaseURL: 'https://manager-d5341.firebaseio.com',
      projectId: 'manager-d5341',
      storageBucket: 'manager-d5341.appspot.com',
      messagingSenderId: '550753859914'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
