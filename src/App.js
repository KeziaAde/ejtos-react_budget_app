import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        // Budget component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                    {
                        //Remaining component
                        <div className='col-sm'>
                            <Remaining />
                        </div>}

                    {
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>}
                </div>
                <h5 className='mt-3'>Allocation</h5>
                <div className='row mt-3'>
                    {
                        //ExpenseList component
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    }
                </div>
                <h5 className='mt-3'>Change Allocation</h5>
                <div className='row mt-3'>
                    {
                        //AllocationForm component
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
