import React from 'react';
import { connect } from 'react-redux';
import ExpenseItemList from './ExpenseItemList';

const ExpenseList = (props) => (
    <div>
        <h1> Expense list</h1>
        {props.expenses.map((expense)=> {
            return <ExpenseItemList key={expense.id} {...expense} />
        })}
        </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};


export default  connect(mapStateToProps)(ExpenseList);