import { createContext, ReactNode, useEffect, useState,useContext } from "react";
import { api } from "../services/api";


interface TransactionsProviderProps{
  children:ReactNode;
}
interface Transaction{
  id:number,
  title:string,
  category: string,
  type:string,
  amount:number,
  createdAt:string
}

interface TransacationsContextData{
  transactions:Transaction[],
  CreateTransaction:(transaction:TransactionInput)=> void;
}

type TransactionInput = Omit<Transaction,'id'|'createdAt'>

const TransactionContext = createContext<TransacationsContextData>(
  {} as TransacationsContextData
)

  export function TransactionsProvider({children}:TransactionsProviderProps){

    const[transactions, setTransactions] = useState<Transaction[]>([])

   useEffect(()=>{
     api('transactions')
      .then(response=> setTransactions(response.data.transactions))
    },[])

  async function CreateTransaction(transactionInput:TransactionInput){

  
  const response = await api.post('transactions',{
    ...transactionInput,
      createdAt: new Date()
    })
  const {transaction} = response.data

  setTransactions([...transactions, transaction])
  }

 return(
  <TransactionContext.Provider value={{ transactions, CreateTransaction}}>
    {children}
  </TransactionContext.Provider>
 )
}

export function useTransactions(){
  const context = useContext(TransactionContext)

  return context
}