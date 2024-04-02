import { createContext, useContext } from "react";
import { useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

const TransactionsContext = createContext<TransactionContextData>(
{} as TransactionContextData
)

interface TransactionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string
    createdAt: string

}

interface TransactionsProviderProps {
    children: ReactNode // ReactNode aceita qualquer tipo passado no children, string, boolean, jsx
}

type TransactionInput = Omit<Transaction, 'id'|'createdAt'>

export function TransactionsProvider ({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    },[]);

    async function createTransaction (transactionInput: TransactionInput) {
        const {data} = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
       const {transaction} = data

       setTransactions([
        ...transactions,
        transaction
       ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
    
}

export function useTransactions () {
    const context = useContext(TransactionsContext)

    return context
}


