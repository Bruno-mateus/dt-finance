import logoImg from '../../assets/logo.svg'
import { Containter, Content } from './styles'

  interface HeaderProps{
    onOpenNewTransactionModal:()=> void 
  }

export function Header({ onOpenNewTransactionModal }: HeaderProps){

  

  return(
    <Containter> 
      <Content>   
      <img src= {logoImg} alt="logo"/>
      <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>

    </Containter>

  )
}