import React from 'react';

const ExpenseItemList = ({description, amount, createAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createAt}</p>
    </div>
)

export default ExpenseItemList;