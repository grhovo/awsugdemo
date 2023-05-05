import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
  }
});
 
root.render(
  <Authenticator>
    {() => (
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ Provider>
    )}
  </Authenticator>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
