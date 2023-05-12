import React from 'react';
import LayoutContainer from '../Layout/LayoutContainer';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  { getImageInfo } from '../../store/actions/imageActions';

const ImageContainer = () => {
  const { message } = useSelector(state => state.image);
  const dispatch = useDispatch();
  const gettingImage = () => {
    dispatch(getImageInfo());
  };

  return (
    <LayoutContainer isStandard>
      <hr />
      <Space direction='vertical'>
        <Button onClick={gettingImage}>Get Images</Button>
        <Space>{message}</Space> 
      </Space>
    </LayoutContainer>
  );
};

export default ImageContainer;
