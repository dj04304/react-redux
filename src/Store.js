//액션을 만드는 곳
//payload는 body라고해도되고 변수명은 편하게 정하면된다. username내에 object여러개를 넣어서 보낼 수 있다.
export const increase = (username) => ({ type: 'INCREMENT', payload: username });
export const decrease = () => ({ type: 'DECREMENT' });

//상태
const initstate = {
  username: '',
  number: 1,
};

// 액션의 결과를 걸러내는 역할
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload }; //return 되면 그걸 호출한 쪽에서 받는게 아닌 return되는 순간 ui변경이 된다.
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
