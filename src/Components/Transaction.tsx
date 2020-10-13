import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { transactionContext } from '../Context/TransContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Transaction=()=> {
  const {AddTransaction}=useContext(transactionContext);
  const classes = useStyles();
  const [incExp, setIncExp] = React.useState("Enter Add Income or Expense to Start Transaction");
  const [check, setCheck]=useState(true);
  const [desc , setdesc]=useState("");
  const [amount , setAmount]:any=useState(0)

  function formInput(){
    const descInput=  document.getElementById("descInput") as HTMLInputElement;
    const amountInput =  document.getElementById("amountInput") as HTMLInputElement;
      descInput.value=""
      amountInput.value=""
  }



  return (
    <div className={classes.root}>

      <Button variant="outlined" color="primary" onClick={()=>{setIncExp("Add Income"); setCheck(false)}}>
        Add Income
      </Button>
      <Button variant="outlined" color="secondary"  onClick={()=>{setIncExp("Add Expense"); setCheck(false)}}>
        Add Expense
      </Button>
          <h3>Description</h3>
          <input id="descInput" onChange={(e)=>{setdesc(e.target.value)}} placeholder="Enter Description" style={{height:"35px" , width:"100%"}}></input>
          <h3>Amount</h3>
          <input id="amountInput" onChange={(e)=>{setAmount(e.target.value)}} disabled={check} type="number" placeholder={incExp} style={{height:"35px" , width:"100%"}}></input>
          <Button variant="contained" color="primary" style={{width:"100%" , marginTop:"15px"}}
          onClick={()=>{incExp==="Add Income"?AddTransaction && AddTransaction({amount:+amount, desc}):AddTransaction && AddTransaction({amount:-amount, desc});formInput()}}>
            Submit
          </Button>

    </div>
  );
}
