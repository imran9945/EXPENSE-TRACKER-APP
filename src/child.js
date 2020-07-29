import React, { useState, useContext } from 'react';
import { TransactionContext } from './Tcontext';

function Child() {

    const { transactions, addTransaction, deltrans} = useContext(TransactionContext);

    
    let [newDesc, setNewDesc] = useState('');
    let [newAmount, setNewAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction({ 
            id:Math.floor(Math.random()*100000000),
            amount: Number(newAmount), 
            desc: newDesc })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="cont">
            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your balance <br /> $ {getIncome() + getExpense()} </h3>

            <div className="exp-cont">
                <h3>Income <br /> $ {getIncome()} </h3>
                <h3>Expense <br /> $ {getExpense()}</h3>
            </div>

            <h4>History</h4>
            <hr />

            <ul className="trans-list">
                {transactions.map((transaction, ind) => {
                    return (
                        <>
                        <li key={ind}>
                        <button className="del-btn" onClick={() => deltrans(transaction.id)}>x</button>
                            <span> {transaction.desc} </span>
                            <span> {transaction.amount} </span>
                        </li>
                        </>
                    )
                })}
            </ul>
            
            <h4>Add New Transaction</h4>
            <hr />

            <form className="trans-form" onSubmit={handleSubmit}>
                <label>
                    Enter Description: <br />
                    <input type="text" required onChange={(e) => setNewDesc(e.target.value)} />
                </label>

                <br />

                <label>
                    Enter Amount: <br />
                    <input type="number" required onChange={(e) => setNewAmount(e.target.value)} />
                </label>

                <br /> <br />

                <input className="sub-but" type="submit" value="Add Transaction" />

            </form>
        </div>
    );
}

export default Child;