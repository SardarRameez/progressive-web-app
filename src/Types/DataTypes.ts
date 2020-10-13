export type transactionType={
    amount:number,
    desc:string
}

export type initialStateType={
    transaction:transactionType[],
    AddTransaction?:((transaction:transactionType)=>void),
    DeleteTransaction?:((id:number)=>void)
}

export type ADDTransaction={
    readonly type:"Add_Transaction",
    readonly payload:transactionType
}

export type DELETETransaction={
    readonly type:"Delete_Transaction",
    readonly payload:number
}



export type Action = ADDTransaction | DELETETransaction