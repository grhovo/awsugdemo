import React from 'react';
import LayoutContainer from '../Layout/LayoutContainer';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  { getMarketInfo } from './../../store/actions/marketActions';

const MarketContainer = () => {
  const { message } = useSelector(state => state.market);
  const dispatch = useDispatch();
  const gettingMarket = () => {
    dispatch(getMarketInfo());
  };

  return (
    <LayoutContainer isStandard>
      <hr />
      <Space direction='vertical'>
        <Button onClick={gettingMarket}>Get market message</Button>
        <Space>{message}</Space> 
      </Space>
    </LayoutContainer>
  );
};

export default MarketContainer;
