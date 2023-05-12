import { Auth } from 'aws-amplify';
  
export const gettingAccessToken = async() => {
  const token = (await Auth?.currentSession?.())?.getIdToken?.()?.getJwtToken?.();

  return  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }; 
};
