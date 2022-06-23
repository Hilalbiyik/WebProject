export let logUserExpenses = [];

export let Expenses = [
  {
    id: 0,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet Hilal",
    categoryId: 4,
    categoryTitle: "Araç",
    title: "Yıkama",
    ammount: 100.0,
    date: "2022-04-10",
  },
  {
    id: 1,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet Eda",
    categoryId: 0,
    categoryTitle: "Yiyecek&İçecek",
    title: "Burger King",
    ammount: 50.0,
    date: "2020-06-29",
  },

 
];
let expenseId = Expenses.length;

export const createLogUserExpenses = (logUserId) => {
  logUserExpenses = [];
  for (let index = 0; index < Expenses.length; index++) {
    if (Expenses[index].userId === logUserId) {
      logUserExpenses[logUserExpenses.length] = Expenses[index];
    }
  }
};

export const addExpense = (
  userId,
  walletId,
  walletTitle,
  categoryId,
  categoryTitle,
  title,
  ammount,
  date
) => {
  const newExpense = {
    id: expenseId,
    userId: parseInt(userId),
    walletId: parseInt(walletId),
    walletTitle: walletTitle,
    categoryId: parseInt(categoryId),
    categoryTitle: categoryTitle,
    title: title,
    ammount: parseFloat(ammount),
    date: date,
  };

  Expenses.push(newExpense);
  logUserExpenses.push(newExpense);
  expenseId += 1;
};

export const deleteExpense = (expenseId) => {
  const newExpensesList = [];
  const newLogUserExpensesList = [];

  for (let index = 0; index < Expenses.length; index++) {
    if (expenseId === Expenses[index].id) {
      console.log("Expense deleted from Expenses.");
    } else {
      newExpensesList.push(Expenses[index]);
    }
  }

  for (let index = 0; index < logUserExpenses.length; index++) {
    if (expenseId === logUserExpenses[index].id) {
      console.log("Expense deleted from logUserExpenses.");
    } else {
      newLogUserExpensesList.push(logUserExpenses[index]);
    }
  }

  Expenses = newExpensesList;
  logUserExpenses = newLogUserExpensesList;
};

export const findExpense = (expenseId) => {
  for (let index = 0; index < Expenses.length; index++) {
    if (Expenses[index].id === expenseId) {
      return Expenses[index];
    }
  }
  return null;
};
