import { Container } from "./styles";

import editImg from '../../assets/Edit.svg'

import { useTransactions } from "../../hooks/useTransactions";

interface TransactionTableProps {
    onOpenEditTransactionModal: () => void
}

export function TransactionTable ( {onOpenEditTransactionModal}: TransactionTableProps ) {
    const {transactions, receiveTransactionId, transactionId} = useTransactions()

    console.log(transactionId)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>{new Intl.NumberFormat('pr-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transaction.amount)}</td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pr-BR').format(
                            new Date(transaction.createdAt)
                        )}</td>
                        <td><button onClick={() => {
                            onOpenEditTransactionModal()
                            receiveTransactionId(transaction.id)
                        }} type="button"><img src={editImg} alt="Editar"/></button></td>
                    </tr>
                    )
                  )}
                </tbody>
            </table>

        </Container>
    )
}