import { useState } from "react"
function TransactionForm(){
  const [formData,setFormData] =useState({
    date:"",
    description:"",
    category:"",
    amount:""
  })
  function handleSubmit(event){
event.preventDefault()
  }
  console.log(formData)
  function handleAddTransaction(e){
e.preventDefault()
console.log("Transaction added")
  }
  return(
    <div className="form" onSubmit={handleSubmit}>
<form>
  <label className="date">Date</label>
  <input type="text" id="date" value={formData.date} onChange={(event)=>setFormData({...formData,date:event.target.value})}/>
  <label className="description">Description</label>
  <input type="text" id="description" value={formData.description} onChange={(event)=>setFormData({...formData,description:event.target.value})}/>
  <label className="category">Category</label>
  <input type="text" id="category"  value={formData.category} onChange={(event)=>setFormData({...formData,category:event.target.value})}/>
  <label className="amount">Amount</label>
  <input type="text" id="amount" value={formData.amount} onChange={(event)=>setFormData({...formData,amount:event.target.value})}/>
  <button type="submit" onClick={handleAddTransaction}>
    ADD-TRANSACTION
  </button>
</form>
    </div>
  )
}
export default TransactionForm