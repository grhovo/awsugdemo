import React from 'react';
import LayoutContainer from '../Layout/LayoutContainer';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  { getVideoInfo } from './../../store/actions/videoActions';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.video);

  const gettingVideo = () => {
    dispatch(getVideoInfo());
  };

  return (
    <LayoutContainer isStandard>
      <hr />
      <Space direction='vertical'>
        <Button onClick={gettingVideo}>Getting Video</Button>
        <Space>{message}</Space>
      </Space>

    </LayoutContainer>
  );
};

export default VideoContainer;
