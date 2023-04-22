/*import TransactionTable from "./TransactionTable"
function TransactionTableList({transactions}){
  return(
    <div className="list">
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
              <h2>Amount</h2>
          </tr>
           {transactions.map((transaction) => (
          <TransactionTable
          key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
          />
        ))}
        </tbody>
      </table>

    </div>
  )
}
export default TransactionTableList*/
import TransactionTable from "./TransactionTable"

function TransactionTableList({ transactions }) {
  return (
    <div className="list">
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
    </div>
  );
}

export default TransactionTableList;
