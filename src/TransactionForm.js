
import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  function handleAddTransaction() {
    addTransaction(formData);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="date">Date</label>
        <input
          type="text"
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
          type="text"
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

export default TransactionForm;
