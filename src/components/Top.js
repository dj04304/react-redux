import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const Top = () => {
  //원래는 props로 넘기는 방식으로 썼다
  // const { number } = props;

  //react-redux hook 사용
  const { number, username } = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h1>Top</h1>
      번호: {number}
      이름: {username}
    </div>
  );
};

export default Top;
