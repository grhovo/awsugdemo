import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { columns } from './helpers';

const List = () => {
  const { list } = useSelector(state => state.text);

  return (
    <>
      <Table 
        rowKey="id"
        dataSource={list}
        columns={columns} 
      />
    </>
  );
};

export default List;
