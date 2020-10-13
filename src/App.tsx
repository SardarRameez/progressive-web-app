import React from 'react';
import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { History } from './Components/History';
import { IncomeExpense } from './Components/IncomeExpense';
import { IncomeExpenseChart } from './Components/IncomeExpenseChart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {TransContext} from './Context/TransContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: '100vh',
    minWidth: 100,
  },
  pad:{
    padding:'20px 30px'
  }
}));

function App() {
  const classes=useStyles();
  return (
    <Grid container className={classes.root}>
    <Grid item xs={12}>
      <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <div className={classes.pad}>
                <TransContext>
                  <Header></Header>
                  <Balance></Balance>
                  <IncomeExpense></IncomeExpense>
                  <IncomeExpenseChart></IncomeExpenseChart>
                  <History></History>
                  <AddTransaction></AddTransaction>
                </TransContext>
              </div>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
