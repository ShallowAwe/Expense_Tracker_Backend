import prisma from "../../models/index.js";

// 🆕 Create a transaction
export const createTransaction = async (data) => {
  return await prisma.transaction.create({
    data,
  });
};

// 📜 Get all transactions for a user
export const getTransactionsByUser = async (userId) => {
  return await prisma.transaction.findMany({
    where: { userId },
    include: { category: true },
    orderBy: { date: "desc" },
  });
};

// 🔍 Get a transaction by ID
export const getTransactionById = async (id) => {
  return await prisma.transaction.findUnique({
    where: { id },
    include: { category: true },
  });
};

// ✏️ Update a transaction
export const updateTransaction = async (id, data) => {
  return await prisma.transaction.update({
    where: { id },
    data,
  });
};

// 🗑️ Delete a transaction
export const deleteTransaction = async (id) => {
  return await prisma.transaction.delete({
    where: { id },
  });
};
