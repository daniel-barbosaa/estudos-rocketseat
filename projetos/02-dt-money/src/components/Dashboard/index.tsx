import {Container} from './styles'
import { useState } from 'react'
import {Summary} from '../Summary'
import { TransactionTable } from '../TransactionsTable'
import { EditTransactionModal } from '../EditTransactionModal'

export function Dashboard () {
    const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] = useState(false)

    function handleOpenEditTransactionModal () {
    setIsEditTransactionModalOpen(true)
    }
    function handleCloseEditTransactionModal () {
        setIsEditTransactionModalOpen(false)
    }

    return (
        <Container>
            <Summary/>
            <TransactionTable onOpenEditTransactionModal={handleOpenEditTransactionModal}/>
            <EditTransactionModal isOpen={isEditTransactionModalOpen} onRequestClose={handleCloseEditTransactionModal}/>
        </Container>
    )
}