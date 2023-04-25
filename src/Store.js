//액션을 만드는 곳
export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });

//상태
const initstate = {
  number: 0,
};

// 액션의 결과를 걸러내는 역할
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 }; //return 되면 그걸 호출한 쪽에서 받는게 아닌 return되는 순간 ui변경이 된다.
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
