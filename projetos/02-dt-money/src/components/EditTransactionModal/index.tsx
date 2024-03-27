import { useState, FormEvent } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import Modal from 'react-modal'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

import CloseImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface EditTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function EditTransactionModal({isOpen, onRequestClose}: EditTransactionModalProps) {

    const {createTransaction} = useTransactions()
    const [type, setType] = useState("deposit")
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)


    async function handleCreateNewTransaction (event:FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setType('')
        setTitle('')
        setCategory('')
        setAmount(0)
        onRequestClose()
    }

    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose}
            className='react-modal-close'
            >
                <img src={CloseImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Editar transação</h2>
                <input placeholder='Titulo' value={title}
                onChange={event => setTitle(event.target.value)}
                />
                <input 
                type="text" 
                placeholder='Valor'
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox type="button" onClick={() => {
                        setType('deposit')
                    }}
                    isactive={type === 'deposit'}
                    activecolor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={() => {
                        setType('withdraw')
                    }}
                    isactive={type === 'withdraw'}
                    activecolor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}