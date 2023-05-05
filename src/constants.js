import { gettingAccessToken } from './helpers';

export const config = {
  headers: {
    'Authorization': `Bearer ${gettingAccessToken()}`,
  },
}; 

