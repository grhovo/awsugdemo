import React from 'react';
import LayoutContainer from '../Layout/LayoutContainer';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import  { getMarketInfo } from './../../store/actions/marketActions';

const MarketContainer = () => {
  const dispatch = useDispatch();
  const gettingMarket = () => {
    console.log('gettingMarket');
    dispatch(getMarketInfo());
  };

  return (
    <LayoutContainer isStandard>
      <hr />
      <Button onClick={gettingMarket}>Get market message</Button>
    </LayoutContainer>
  );
};

export default MarketContainer;
