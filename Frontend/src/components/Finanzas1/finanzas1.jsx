import React, { useState } from 'react';
import fondo from './fondo.png'; 

const FinanceTips = () => {
  const tips = [
    "Crea un presupuesto mensual y trata de ceñirte a él.",
    "Evita endeudarte más de lo necesario.",
    "Ahorra un porcentaje de tus ingresos regularmente.",
    "Investiga y compara opciones antes de tomar préstamos o tarjetas de crédito.",
    "Que no te gane la tentación de gastar en cosas innecesarias.",
  ];

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Consejos financieros para estudiantes:</h3>
      <ul className="list-disc pl-6">
        {tips.map((tip, index) => (
          <li key={index} className="mb-2">{tip}</li>
        ))}
      </ul>
    </div>
  );
};

const ExpensesList = ({ budget }) => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleAddExpense = (e) => {
    if (e.key === 'Enter' && newExpense.trim() !== '') {
      const expenseAmount = parseFloat(newExpense);
      setExpenses([...expenses, expenseAmount]);
      setTotalExpenses(totalExpenses + expenseAmount);
      setNewExpense('');
    }
  };

  const totalRemaining = budget - totalExpenses;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Lista de Gastos:</h3>
      <div className="flex mb-2">
        <input
          type="text"
          className="w-full p-2 border rounded mr-2"
          placeholder="Agregar gasto..."
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
          onKeyDown={handleAddExpense}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            if (newExpense.trim() !== '') {
              const expenseAmount = parseFloat(newExpense);
              setExpenses([...expenses, expenseAmount]);
              setTotalExpenses(totalExpenses + expenseAmount);
              setNewExpense('');
            }
          }}
        >
          Agregar
        </button>
      </div>
      <ul className="list-disc pl-6 mb-2">
        {expenses.map((expense, index) => (
          <li key={index} className="mb-1">${expense.toFixed(2)}</li>
        ))}
      </ul>
      <p className="text-lg font-bold">Total de gastos: ${totalExpenses.toFixed(2)}</p>
      <p className="text-lg font-bold">Presupuesto restante: ${totalRemaining.toFixed(2)}</p>
    </div>
  );
};

const App = () => {
  const [budget, setBudget] = useState(500); // Establecer el presupuesto inicial

  const handleBudgetChange = (e) => {
    const newBudget = parseFloat(e.target.value) || 0;
    setBudget(newBudget);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg max-w-md shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-center">Gastos y Consejos Financieros para Estudiantes</h2>
        <div className="space-y-8">
          <div className="mb-6">
            <label className="block text-xl font-bold mb-2">Establecer presupuesto:</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={budget}
              onChange={handleBudgetChange}
            />
          </div>
          <ExpensesList budget={budget} />
          <FinanceTips />
        </div>
      </div>
    </div>
  );
};

export default App;
