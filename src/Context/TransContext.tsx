import React, { createContext, useReducer } from 'react'
import { transactionReducer } from './TransReducer'
import {initialStateType ,  Action , transactionType} from './../Types/DataTypes'

let initialState:initialStateType={
    transaction:[{amount:500, desc:"Book"},{amount:-300 , desc:"Bill"} , { amount:-150, desc:"Fees"}]
}


export const transactionContext=createContext<initialStateType>(initialState)


export const TransContext:React.FC = ({children}) => {
    let [state, dispatch]=useReducer<React.Reducer<initialStateType, Action>>(transactionReducer,initialState)
    function AddTransaction(newTrans:transactionType){
        dispatch({
                type:"Add_Transaction",
                payload:newTrans
            })
    }
    function DeleteTransaction(id:number){
        dispatch({
            type:"Delete_Transaction",
            payload:id
        })
    }
    
    return (
        <transactionContext.Provider value={{transaction:state.transaction, AddTransaction , DeleteTransaction}}>
            {children}
        </transactionContext.Provider>
    )
}
