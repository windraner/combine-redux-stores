import React from 'react';
import initStores from 'combine-rudex-stores/init'

import ReactApp1, { store as store1 } from 'react-app-1'
import ReactApp2, { store as store2 } from 'react-app-2'

const stores = {
  store1,
  store2
}
/*
  stores: object - store list
  reducers: array - {
    reducerName - raducer name in store
    reducerType - action type to update all reducer state ({ ...state, ...action.payload })
  }
*/
initStores({
  stores,
  reducers: [
    { reducerName: 'store11', reducerType: 'update1'},
    // { reducerName: 'store12', reducerType: 'update2'}
  ]
})

function App () {
  return (
    <div>
      Клик по "Inc store 1" и "Inc store 2" увеличивают счетчик соотвествующиъ сторов <br />
      Базовая конфигурация снихронизирует данные по 1 счетчику (обновление в любом сторе вызывает обновление и в другом)
      <hr />
      <ReactApp1 />
      <hr />
      <ReactApp2 />
    </div>
  );
}

export default App
