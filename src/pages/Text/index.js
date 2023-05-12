import React, { useEffect, useState } from 'react';
import LayoutContainer from '../Layout/LayoutContainer';
import { Button, Space, Input, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTextInfo, getTextInfo } from '../../store/actions/textActions';
import List from './List';
import { setIsAdded, setList } from '../../store/slices/textSlice';
import { successText } from './helpers';

const TextContainer = () => {
  const dispatch = useDispatch();
  const { message, isAdded } = useSelector(state => state.text);
  const [value, setValue] = useState('');
  const handleTyping = (e) => {
    setValue(e.target.value);
  };

  const getText =() => {
    value && dispatch(getTextInfo(value));
  };

  //Add text logic

  const [text, setText] = useState('');
  const [item, setItem] = useState(null);

  const handleText = (e) =>{
    setText(e.target.value);
  };

  const addText = () => {
    if(text) {
      const body = {
        id: `${Date.now()}`,
        text,
      };
      setItem(body);
      dispatch(addTextInfo(body));
      setText('');
    }
  };

  useEffect(()=> {
    if(isAdded) {
      dispatch(setList(item));
      dispatch(setIsAdded(false));
      notification.success(successText);
    }
  }, [isAdded]);

  return (
    <LayoutContainer isStandard>
      <hr />
      <Space  direction='vertical'>
        <Space>
          <Input value={text} placeholder="Basic usage" onChange={(e) => handleText(e)} />
          <Button type='primary' onClick={addText}>Add  text</Button>   
        </Space>
      </Space>
      <List />
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
