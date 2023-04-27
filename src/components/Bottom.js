import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../Store';

const Bottom = () => {
  // const { addNumber } = props;

  //react-redux hooks
  //useDispatch 를 사용하면 store를 바로 불러올 수 있으며, 미리 생성해둔 increase함수를 불러올 수 있다.
  const dispatcher = useDispatch();
  return (
    <div className="sub_container">
      <h1>Bottom</h1>
      <button onClick={() => dispatcher(increase('name'))}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
