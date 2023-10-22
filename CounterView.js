import React from 'react';
import counterStore from './CounterStore';
import {observer} from 'mobx-react';

const CounterView=observer(()=> {
    return (
        <div>
            <h1>{counterStore.counter}</h1>
            <button onClick={()=>counterStore.additions()}>+</button>
            <button onClick={()=>counterStore.substraction}>-</button>
        </div>
    );
})

export default CounterView;