import React, { createContext, useReducer } from 'react';
import transactionReducer from './Treducer';

const initialData = [
    { id:1,amount: 800, desc: "Cash" },
    { id:2,amount: 40, desc: "Book" },
    { id:3,amount: -200, desc: "Camera" }
]

export const TransactionContext = createContext(initialData);

export const TProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialData);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
   
    }
    function deltrans(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
   
    }
    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addTransaction,
                deltrans
            }
        }>
            {children}
        </TransactionContext.Provider>
    );

}