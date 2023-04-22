function TransactionTable({date,description,category,amount}){
  return(
    <div className="table">
<tr>
  <td>{date}</td>
   <td>{description}</td>
    <td>{category}</td>
     <td>{amount}</td>
</tr>
    </div>
  )
}
export default TransactionTable;