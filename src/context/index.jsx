import { createContext, useState } from "react";
import TransactionForm from "../components/add-transactions";

export const GlobalContext = createContext();

export default function GlobalState({children}){

    const [formData,setFormData] = useState({
        type : 'expense',
        amount : 0,
        description: '',
    })

    const [value,setValue] =useState('expense');
    const[totalExpense,setTotalExpense]= useState(0);
    const[totalIncome,setTotalIncome]= useState(0);
    const [transactions, setTransactions] = useState([]);

    function handleFormSubmit(currentFormData){
       if (!currentFormData.description|| !currentFormData.amount) return;

       setTransactions([
        ...transactions,
        {...currentFormData,id:Date.now()},
       ]);
    }

    return (<GlobalContext.Provider
        value= {{
            formData,setFormData,value,setValue,totalExpense,setTotalExpense,totalIncome,setTotalIncome
            ,transactions,setTransactions,handleFormSubmit
        }}
        
    ><TransactionForm/>{children}</GlobalContext.Provider>);
}