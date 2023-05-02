import React, { useState } from 'react';
import LayoutContainer from '../Layout/LayoutContainer';
import { Button, Space, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getTextInfo } from '../../store/actions/textActions';

const TextContainer = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.text);
  const [value, setvalue] = useState('');
  const handleTyping = (e) => {
    setvalue(e.target.value);
  };

  const getText =() => {
    value && dispatch(getTextInfo(value));
  };

  return (
    <LayoutContainer isStandard>
      <hr />
      <Space  direction='vertical'>
        <Space>
          <Input placeholder="Basic usage" onChange={(e) => handleTyping(e)} />
          <Button type='primary' onClick={getText}>Get Text By Id</Button>   
        </Space>
        <Space>
          {message}
        </Space>
      </Space>
    </LayoutContainer>
     
  );
};

export default TextContainer;
