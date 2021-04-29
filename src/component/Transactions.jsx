import { Box, Divider, Typography, makeStyles, List } from '@material-ui/core'
import React from 'react'
import Transaction from './Transaction'

const useStyle = makeStyles({
    component: {
        '& > *': {
            marginBottom: 10,
        }
    }
})

const Transactions = ({ transactions, deleteTransaction }) => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Typography variant='h5'>Transactions History</Typography>
            <Divider />
            <List>
                {transactions.map(transaction => {
                    return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
                })}
            </List>
        </Box>
    )
}

export default Transactions
