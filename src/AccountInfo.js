
import React,{useState,useEffect} from "react"
import  TransactionForm from "./TransactionForm"
import TransactionTableList from "./TransactionTableList"
import SearchBar from "./SearchBar"
//the state variables for the Transaction info function
function TransactionInfo(){
  const [transactions,setTransactions]=useState([])
  const [search,setSearch]=useState("")
   useEffect(() => {
    //fetching transactions from the API
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);
  // Function to add a new transaction to the list
  function addTransaction(newTransaction){
    let id=transactions.length + 1;
    newTransaction = {...newTransaction,id}
   
    fetch("http://localhost:3000/transactions",{
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
  //
   function searchHandler(event){
    setSearch(event.target.value)
  }
//filter transactions with the search values
  const filteredTransactions = transactions.filter((transaction) => 
  transaction.description.includes(search)
);
 // Show the search bar, transaction table list, and transaction form
  return(
    <div className="info" >
<SearchBar search={search} searchHandler={searchHandler} />
<TransactionTableList transactions={filteredTransactions}/>
<TransactionForm addTransaction={addTransaction}/>
 
    </div>
  )
}
export default TransactionInfo