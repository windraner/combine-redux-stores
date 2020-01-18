// import React from 'react'
// // import { BehaviorSubject } from 'rxjs'
// // import isEqual from 'lodash/isEqual'

// export const globalContext = React.createContext({
//   selectedAction: new BehaviorSubject(''),
// })

// function defaultStateMapper (setter, nextValue) {
//   return setter(nextValue)
// }

// export const identity = value => value

// // Higher order hook for providing access to a single key of global state
// export function createUseGlobalState (key) {
//   return (fn = identity, deps = []) => {
//     const context = React.useContext(globalContext)
//     const withFn = React.useCallback(fn, deps)
//     const stateObservable = context[key]
//     const [localCopy, setLocalCopy] = React.useState(withFn(stateObservable.value))
//     React.useEffect(() => {
//       const sub = stateObservable.subscribe((...args) => {
//         if (!isEqual(localCopy, withFn(...args))) return setLocalCopy(withFn(...args))
//       })
//       return () => sub.unsubscribe()
//     }, [stateObservable, localCopy, setLocalCopy, withFn])
//     return localCopy
//   }
// }

// // Higher order hook for providing access to updating a single key of global state
// export function createUseSetGlobalState (key, mapper = defaultStateMapper) {
//   return (fn, deps) => {
//     const withFn = React.useCallback(fn, deps)
//     const context = React.useContext(globalContext)
//     const stateObservable = context[key]
//     const setter = React.useCallback(next => stateObservable.next(next), [stateObservable])
//     return React.useCallback((...args) => {
//       return mapper(setter, withFn(stateObservable.value, ...args))
//     }, [setter, stateObservable, withFn])
//   }
// }

// export const useSetSelectedAction = createUseSetGlobalState('selectedAction', (...args) => console.log('arg', args))
// export const useSelectedAction = createUseGlobalState('selectedAction')
