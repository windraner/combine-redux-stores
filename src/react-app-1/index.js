import React from 'react';
import { createStore, combineReducers } from 'redux'
import reducer11 from './reducer11'
import reducer12 from './reducer12'

import { Provider, connect } from 'react-redux';

const rootReducer = () => combineReducers({
  store11: reducer11,
  store12: reducer12
})

export const store = createStore(rootReducer())

const mapStateToProps = (state) => {
  return {
    counter1: state.store11.value11,
    counter2: state.store12.value12
  }
}
const mapDispatchToProps = {
  incStore1: (counter1) => ({ type: 'update1', payload: { value11: counter1 + 1 } }),
  incStore2: (counter2) => ({ type: 'update2', payload: { value12: counter2 + 1 } })
}

function Component ({ counter1, counter2, incStore1, incStore2 }) {
  return (
    <div>
      <div>Store 1</div>
      <div>Store1 counter: {counter1} Store2 counter: {counter2}</div>
      <div onClick={() => incStore1(counter1)}>Inc store 1</div>
      <div onClick={() => incStore2(counter2)}>Inc store 2</div>
    </div>
  )
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component)

function App () {
  return (
    <Provider store={store}>
      <ConnectedComponent />
    </Provider>
  )
}

export default App
