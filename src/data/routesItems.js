import React from 'react';
import Video from '../pages/Video';
import Text from '../pages/Text';
import Market from '../pages/Market';
import Image from '../pages/Image';
import {  HomeIcon, RestaurantsIcon, UserIcon, LearnIcon } from './sidebarIcons';

const routeItems = [
  {
    key: 'video',
    title: 'Video',
    path: '/',
    isMenuItem: true,
    icon: <HomeIcon />,
    component: <Video />
  },
  {
    key: 'market',
    title: 'Market',
    path: '/market',
    isMenuItem: true,
    icon: <UserIcon />,
    component: <Market />
  },    
  {
    key: 'text',
    title: 'Text',
    path: '/text',
    isMenuItem: true,
    icon: <RestaurantsIcon />,
    component: <Text />
  },
  {
    key: 'image',
    title: 'Image',
    path: '/image',
    isMenuItem: true,
    icon: <LearnIcon />,
    component: <Image />
  },
];

export default routeItems;
