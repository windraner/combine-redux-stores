import isEqual from 'lodash.isequal'

function syncData ({ stores, triggeredStoreData, triggeredStoreName, reducers }) {
  // loop all stores to compare with new changes
  Object.keys(stores).forEach((storeName) => {
    if (storeName === triggeredStoreName) return // abort checking store which call update

    const store = stores[storeName]
    const storeData = store.getState()

    // loop list of reducers to sunc
    reducers.forEach((reducer) => {
      const { reducerName, reducerType } = reducer
      // compare data in current store and store which call update
      if (!isEqual(storeData[reducerName], triggeredStoreData[reducerName])) {
        // update store if does not have latest version
        store.dispatch({ type: reducerType, payload: triggeredStoreData[reducerName] })
      }
    })
  })
}

export default function initStores ({ stores, reducers }) {
  // loop all stores to create subscription
  Object.keys(stores).forEach((storeName) => {
    const store = stores[storeName] // get stor

    const cb = function () {
      const storeData = store.getState()
      syncData({
        stores,
        triggeredStoreData: storeData,
        triggeredStoreName: storeName,
        reducers
      })
    }

    store.subscribe(cb) // subscribe to store changes
  })
}
