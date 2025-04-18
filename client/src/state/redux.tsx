import { useRef } from 'react'   
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import globalReducer from '@/state'
import { api } from '@/state/api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


const rootRuducer = combineReducers({
    global: globalReducer,
    [api.reducerPath] : api.reducer,
})

export const makeStore = () => {
    return configureStore({
        reducer: rootRuducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(api.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function StoreProvider({children} : {children : React.ReactNode}) {
    const storeRef = useRef<AppStore | null>(null)

    if(!storeRef.current) {
        storeRef.current = makeStore();
        setupListeners(storeRef.current.dispatch)
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )

}

