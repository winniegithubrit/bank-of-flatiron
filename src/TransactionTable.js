
import './index.css';
function TransactionTable({date,description,category,amount}){
  return(
   
<tr>
  <td>{date}</td>
   <td>{description}</td>
    <td>{category}</td>
     <td>{amount}</td>
</tr>
   
  )
}
export default TransactionTable;