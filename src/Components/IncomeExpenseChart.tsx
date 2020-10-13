import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HistoryIcon from '@material-ui/icons/History';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Doughnut } from 'react-chartjs-2';
import { transactionContext } from '../Context/TransContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  income: {
    color:"green"
  },
  expense: {
    color:"red"
  }
}));


export const IncomeExpenseChart=()=> {
    const {transaction}=useContext(transactionContext)
    const classes = useStyles();
    const amounts=transaction.map((trans:any)=>trans.amount)
    const income=amounts.filter((amount:any)=>amount>0).reduce((acc:any,item:any)=>(acc+=item),0).toFixed(2);
    const expense=amounts.filter((amount:any)=>amount<0).reduce((acc:any,item:any)=>(acc-=item),0).toFixed(2);
    const Balance=income-expense;
    const [open, setOpen] = React.useState(false);

    const data = {
        labels: [
            'Income',
            'Expense',
            'Balance'
        ],
        datasets: [{
            data: [income, expense, Balance],
            backgroundColor: [
            'rgb(0,255,0,0.8)',
            'rgb(255,0,0,0.8)',
            'rgb(0,0,255,0.8)'
            ],
            hoverBackgroundColor: [
                'rgb(0,255,0,0.8)',
                'rgb(255,0,0,0.8)',
                'rgb(0,0,255,0.8)'
            ]
        }]
    };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Financial Graph" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Doughnut data={data}></Doughnut>
      </Collapse>
    </List>
  );
}