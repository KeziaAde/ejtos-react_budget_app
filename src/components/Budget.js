import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (expenses <= newBudget <= 20000) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        } else if (newBudget > 20000) {
            window.alert("The budget cannot exceed £20,000")
        } else if (newBudget < expenses) {
            window.alert("You cannot reduce the budget lower than the spending")
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
