//importing the transcationTable
import TransactionTable from "./TransactionTable"

import './index.css';
//created a transactionTableList function returns
// a table containing a header row and a body that shows transaction information.
function TransactionTableList({ transactions }) {
  return (
    //the table with the various rows and body
    //If transactions is not empty, the code maps over the transactions array and generates
    // a TransactionTable component for each transaction, passing the transaction's properties as props and using the id as the key.
      <table>
        <tbody>
          <tr>
            <th>
              <h2>Date</h2>
            </th>
            <th>
              <h2>Description</h2>
            </th>
            <th>
              <h2>Category</h2>
            </th>
            <th>
              <h2>Amount</h2>
            </th>
          </tr>
          
          {transactions && transactions.length > 0 ? (
            transactions.map((transaction) => (
              <TransactionTable
                key={transaction.id}
                date={transaction.date}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
              />
            ))
          ) : (
            <tr>
              <td>No transactions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    
  );
}

export default TransactionTableList;
