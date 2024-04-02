import { createContext, useContext } from "react";
import { useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface TransactionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>,
    editTransaction: (transaction: TransactionInput) => Promise<void>,
    receiveTransactionId: (transactionId: number) => void,
    transactionId: number
}

const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
)
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
    const [transactionId, setTransactionId] = useState(0)

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    },[]);

    async function createTransaction (transaction: TransactionInput) {
        const {data} = await api.post('/transactions', {
            ...transaction,
            createdAt: new Date()
        })
       const {transactions} = data

       setTransactions([
        ...transactions,
        transaction
       ])
    }
    
    function receiveTransactionId (transactionId: number) {
        setTransactionId(transactionId)
    }
  
    async function editTransaction (transaction: TransactionInput) {

        try{
            const {data} = await api.patch(`transactions/${transactionId}`, {
                ...transaction
            })

            const {transactions} = data

            setTransactions([
                ...transactions
            ])
        }catch(error) {
            console.log("Algo deu erro ao atualizar a transação!", error)
        }
        

        // Agora é passar os dados no corpo da requisição de forma dinamica e atualizar o estado recebendo o array com as novas transaction
        // Crie essa função lá no hooksTransactions
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction, editTransaction, receiveTransactionId, transactionId}}>
            {children}
        </TransactionsContext.Provider>
    )
    
}

export function useTransactions () {
    const context = useContext(TransactionsContext)

    return context
}


