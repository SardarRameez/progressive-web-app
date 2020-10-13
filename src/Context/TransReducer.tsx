import { FiberPin } from "@material-ui/icons";
import {initialStateType, Action} from './../Types/DataTypes'
export const transactionReducer=(state:initialStateType, action:Action):initialStateType=>{
    switch(action.type){
        case "Add_Transaction":
            return { 
               transaction:[action.payload, ...state.transaction]
            };
        case "Delete_Transaction":
            return {
                transaction:state.transaction.filter((transaction:any,key:any)=>key!==action.payload)};
        default:
            return state;
    }
}