// import React from 'react'
// import { storesList } from './init'

// function HOCconnect (Component, props, mapStateToProps, mapDispatchToProps, storeName) {
//   const currentStore = storesList[storeName]

//   if (!currentStore) throw new Error(`Store "${storeName}" not added`)

//   const cb = React.useCallback(() => {
//     if (typeof mapStateToProps !== 'function') return {}
//     return mapStateToProps(currentStore.getState())
//   }, [mapStateToProps, currentStore])

//   const [extraProps, setExtraProps] = React.useState(cb())
//   React.useEffect(() => {
//     const unsubscribe = currentStore.subscribe(() => setExtraProps(cb()))
//     return unsubscribe
//   }, [currentStore, cb])

//   const extraActions = React.useMemo(() => {
//     const { dispatch, getState } = currentStore
//     if (typeof mapDispatchToProps === 'function') return mapDispatchToProps(dispatch, getState)
//     if (mapDispatchToProps && typeof mapDispatchToProps === 'object') {
//       const newActions = {}
//       Object.keys(mapDispatchToProps).forEach(actionName => {
//         const actionBody = mapDispatchToProps[actionName]
//         if (typeof actionBody === 'function') return newActions[actionName] = (...args) => (actionBody(...args)(dispatch, getState))
//         newActions[actionName] = () => dispatch(actionBody)
//       })
//       return newActions
//     }
//     return {}
//   }, [currentStore, mapDispatchToProps])

//   return <Component {...props} {...extraProps} {...extraActions} />
// }

// export function globalConnect (...storeArgs) {
//   return function (Component) {
//     return function (props) {
//       return HOCconnect(Component, props, ...storeArgs)
//     }
//   }
// }
