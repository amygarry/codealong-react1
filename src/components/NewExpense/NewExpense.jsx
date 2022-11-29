import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense (props){

    const[isEditing, SetIsEditing] = useState(false)

    function saveExpenseDataHandler (enteredExpensedData){
        const expenseData = {
            ...enteredExpensedData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        SetIsEditing(false)
    }

    const startEditingHandler =()=>{
        SetIsEditing(true)
    }
    const stopEdititingHandler = ()=>{
        SetIsEditing(false)
    }

    return (
    <div className="new-expense">
       {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
        {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} oncancel={stopEdititingHandler}/>)}
    </div>
    )
}

export default NewExpense