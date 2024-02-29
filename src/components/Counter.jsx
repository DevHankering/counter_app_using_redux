import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment, decrement} from '../redux/slices/CounterSlice';

function Counter() {

     const count = useSelector(  (state) => state.counter.value);
     const dispatch = useDispatch();

    return (
        <div className="w-11/12 max-w-[600px] mx-auto bg-sky-300 leading-10 p-10 rounded-xl text-center">
            <button onClick = {() => dispatch(increment())} className="text-5xl border-2 px-4 py-2 rounded-xl border-sky-500 hover:bg-sky-400 transition-all duration-300 hover:border-transparent">Increment</button>
            <br />
            <br />
            <div className="text-6xl text-sky-900">{count}</div>
            <br />
            
            <button onClick = { () => dispatch(decrement())} className="text-5xl border-2 px-4 py-2 rounded-xl border-sky-500 hover:bg-sky-400 transition-all duration-300 hover:border-transparent">Decrement</button>
        </div>
    )
}


export default Counter;