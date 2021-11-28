import Modal from 'react-modal';
import { FormModal, RadioBox, TransactionTypeContainer } from './style';
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';
interface NewTransactionModal{
  isOpen: boolean,
  onRequestClose: ()=>void
}


export function TransactionModal( {onRequestClose,isOpen}:NewTransactionModal){
  
const {CreateTransaction}= useTransactions();

  const[title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const[category, setCategory] = useState('');
  const [type, setType] = useState('deposit')

 async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault()

   await CreateTransaction({
      title,
      type,
      category,
      amount,
    })

    onRequestClose()
    setTitle('')
    setType('deposit')
    setCategory('')
    setAmount(0)
  }

   return(
    <Modal 
    overlayClassName="react-modal-overlay" 
    className="react-modal-content"
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    >
      
      <FormModal onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Descrição"
        value={title}
        onChange={event=>setTitle(event.target.value)}
        />
        <input type="number"
        value={amount}
        onChange={event=>setAmount(Number(event.target.value))}
         />
        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={()=> setType('deposit')}
            isActive={type ==='deposit'}
            activeColor= 'green'
          >
            <img src={imgIncome} alt="entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
              type="button"
              onClick={()=> setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor='red'
          >
            <img src={imgOutcome} alt="saida"/>
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria"
        value={category}
        onChange={event=>setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </FormModal>
  </Modal>
   )
}