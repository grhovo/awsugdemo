import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import routeItems from './data/routesItems';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
  }
});

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <p>Welcome {user.username}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
      {/* <Router>
        <Routes>
          {
            routeItems.map((route) => {
              if(route.children){
                return route.children.map((child)=> (
                  <Route
                    key={child.key}
                    path={child.path}
                    element={child.component}
                  />
                ));
              }
              
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.component}
                />
              );
            })
          }
        </Routes>
      </Router> */}
    </Authenticator>
  );
}

export default App;
