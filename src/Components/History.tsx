import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HistoryIcon from '@material-ui/icons/History';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { transactionContext } from '../Context/TransContext';
import { transactionType } from '../Types/DataTypes';

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


export const History=()=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {transaction, DeleteTransaction}=useContext(transactionContext);
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
        <ListItemText primary="History" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        { transaction.map((trans:transactionType,id:number)=>
          <List component="div" disablePadding key={id}>
            <ListItem button className={classes.nested} >
            <span style={{height:"40px", borderLeft:"5px solid"  ,marginRight:"5px"}} className={trans.amount>0?classes.income:classes.expense}></span>
              <ListItemText
                      primary={trans.desc}
                    />
              <ListItemText
                      primary={trans.amount}
                    />
              <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" onClick={()=>{DeleteTransaction && DeleteTransaction(id)}}>
                        <DeleteIcon/>
                      </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
          </List>
          )}
      </Collapse>
    </List>
  );
}
