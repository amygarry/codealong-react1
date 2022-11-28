import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense (props){

    function saveExpenseDataHandler (enteredExpensedData){
        const expenseData = {
            ...enteredExpensedData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return (
    <div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    )
}

export default NewExpense