import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


function ExpenseItem(props) {
    //Adding Javascript code
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;

    

    return (
       <div class="expense-item">
         <ExpenseDate date={props.date}/>
           <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">${props.amount}</div>
           </div>
       </div>
    )
}

export default ExpenseItem;