//import react and usestate from react
import React, { useState } from "react";
//defining a react component called TransactionForm
function TransactionForm({ addTransaction }) {
  //trying to use the useState to store the data for the form
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
//this is a function that will handle the submission of the form
  function handleSubmit(event) {
    event.preventDefault();
    
  }
//this function will enable us to add a transaction in the form
  function handleAddTransaction() {
    addTransaction(formData);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }
//the form with input fields and the submit button
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="date">Date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={(event) =>
            setFormData({ ...formData, date: event.target.value })
          }
        />
        <label className="description">Description</label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <label className="category">Category</label>
        <input
          type="text"
          id="category"
          value={formData.category}
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
        />
        <label className="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={(event) =>
            setFormData({ ...formData, amount: event.target.value })
          }
        />
        <button type="submit" onClick={handleAddTransaction}>
          ADD TRANSACTION
        </button>
      </form>
    </div>
  );
}
//exporting the transactionForm 
export default TransactionForm;
