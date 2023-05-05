import awsExports from './aws-exports';

export const gettingAccessToken = () => {
  const key = `CognitoIdentityServiceProvider.${awsExports.USER_POOL_APP_CLIENT_ID}`;
  const userId = localStorage.getItem(`${key}.LastAuthUser`) || '';

  console.log({ userId });
  console.log(`${key}.${userId}.idToken`);

  return localStorage.getItem(`${key}.${userId}.idToken`) || '';
};

export const config = {
  headers: {
    'Authorization': `Bearer ${gettingAccessToken()}`,
  },
}; 