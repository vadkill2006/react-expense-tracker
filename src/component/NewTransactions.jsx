import { Box, TextField, Typography, makeStyles, Button } from '@material-ui/core';
import React, { useState } from 'react';

const useStyle = makeStyles({
    constainer: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            marginTop: 30,
        }
    },
    button: {
        background: '#445A6F',
        color: '#fff',
    }
})

const NewTransactions = ({ addTransaction }) => {
    const classes = useStyle();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 10000),
            text: text,
            amount: +amount,
        }
        addTransaction(transaction);
        setText('');
        setAmount();
    }
    return (
        <Box className={classes.constainer}>
            <Typography variant='h5'>New Transactions</Typography>
            <TextField label='Enter Income/Expense' onChange={(e) => setText(e.target.value)} />
            <TextField label='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
            <Button variant='contained' className={classes.button} onClick={newTransaction}>Add new transaction</Button>
        </Box>
    )
}

export default NewTransactions
