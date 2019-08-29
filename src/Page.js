import React from 'react';
import {useMappedState,useDispatch} from 'redux-react-hook';

import {
  incrementAction,
  decreaseAction,
} from './actions';

function Page(props) {
  const value = useMappedState(state=> state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(incrementAction())}>increment</button>
      <button onClick={() => dispatch(decreaseAction())}>decrease</button>
    </div>
  );
}

export default Page;
