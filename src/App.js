import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routeItems from './data/routesItems';
import { Auth } from 'aws-amplify';

function App() {

  Auth.currentSession().then(res=>{
    let accessToken = res.getAccessToken()
    let jwt = accessToken.getJwtToken()
        
    //You can print them to see the full objects
    console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
    console.log(`myJwt: ${jwt}`)
  })

  return (
    <>
      <Router>
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
      </Router>
    </>
  );
}

export default App;
