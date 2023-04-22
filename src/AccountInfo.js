
import React,{useState,useEffect} from "react"
import  TransactionForm from "./TransactionForm"
import TransactionTableList from "./TransactionTableList"
import SearchBar from "./SearchBar"
function TransactionInfo(){
  const [transactions,setTransactions]=useState([])
  const [search,setSearch]=useState("")
   useEffect(() => {
    fetch(" http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);
  function addTransaction(event,newTransaction){
    let id=transactions.length + 1;
    newTransaction = {...newTransaction,id}
    event.preventDefault()
    event.target.reset();
    fetch(" http://localhost:3000/transactions",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTransaction)
    })
       .then((response)=>response.json())
       .then((data)=>{
        setTransactions((transactions)=>[...transactions,data])
       })

  }
   function searchHandler(event){
    setSearch(event.target.value)
  }

  const filteredTransactions = transactions.filter((transaction) => 
  transaction.description.includes(search)
);

  return(
    <div className="info" >
<SearchBar search={search} searchHandler={searchHandler} />
<TransactionTableList transactions={filteredTransactions}/>
<TransactionForm addTransaction={addTransaction}/>
 
    </div>
  )
}
export default TransactionInfo