import React, { useContext } from 'react'
import { transactionContext } from '../Context/TransContext'

export const Balance = () => {
    const {transaction }=useContext(transactionContext)
    const amount:number[]=transaction.map((trans:any)=>trans.amount)
    const total:number=amount.length>0?amount.reduce((acc:any,item:any)=>(acc+=item),0).toFixed(2):0
    return (
        <div>
             <h3>Your Balance</h3>
            <h2 style={{marginTop:-10}}>${total}</h2>
        </div>
    )
}
