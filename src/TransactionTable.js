
import './index.css';

// Define a new React component named TransactionTable
function TransactionTable({date,description,category,amount}){
  return(
     // Show a table row with four cells that display transaction information
<tr>
  <td>{date}</td>
   <td>{description}</td>
    <td>{category}</td>
     <td>{amount}</td>
</tr>
   
  )
}

// Export the TransactionTable component
export default TransactionTable;