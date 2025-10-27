import {
  createTransaction,
  getTransactionsByUser,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "../services/transaction/transaction.services.js";

//  Create a new transaction
export const create = async (req, res) => {
  try {
    const userId = req.user.id; // from JWT middleware
    const { categoryId, amount, description, merchant, date } = req.body;

    const transaction = await createTransaction({
      userId,
      categoryId,
      amount,
      description,
      merchant,
      date,
    });

    res.status(201).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

//  Get all transactions for the logged-in user
export const getAll = async (req, res) => {
  try {
    const userId = req.user.id;
    const transactions = await getTransactionsByUser(userId);
    res.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

//  Get a single transaction by ID
export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await getTransactionById(parseInt(id));

    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.json(transaction);
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({ error: "Failed to fetch transaction" });
  }
};

//  Update a transaction
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await updateTransaction(parseInt(id), req.body);
    res.json(updated);
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ error: "Failed to update transaction" });
  }
};

//  Delete a transaction
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTransaction(parseInt(id));
    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ error: "Failed to delete transaction" });
  }
};
