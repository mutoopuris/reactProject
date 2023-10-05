import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import User from './User';

const App = () => {
  let users = [
    {
      id:23,
      name:'Henry',
      place:'USA'
    },
    {
      id:26,
      name:'Vamshi',
      place:'Hyderabad'
    },
    {
      id:27,
      name:'Bentley',
      place:'London'
    }
];

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Mac',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      {
        users.map(
          (item)=> {
            return <User key={item.id} id={item.id} name={item.name} place={item.place} />
          }
      )
    }
      <NewExpense />
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
