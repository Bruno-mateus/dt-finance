import incomeImg from'../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Containter, Content } from './style'
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){

  const {transactions} = useTransactions()
  
  const summary = transactions.reduce((acc, transaction) =>{
    if(transaction.type==='deposit'){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
  }else{
    acc.withdraws += transaction.amount
    acc.total-= transaction.amount
  }
    return acc
   },{
     deposits:0,
     withdraws:0,
      total:0
   })

  return(
    
    <Containter> 
      <Content>
      <div>
          <header>
            <span>Entradas</span>
            <img src= {incomeImg} alt="income"/>
          </header>
          <strong>{          
                  new Intl.NumberFormat('pt-BR', {
                  style:'currency',
                   currency:'BRl'
                  }).format(summary.deposits)
                  }
        </strong> 
      </div>
    </Content>
    
    <Content>
      <div>
          <header>
            <span>Saidas</span>
            <img src= {outComeImg} alt="outcome"/>
          </header>
          <strong>{                  
          new Intl.NumberFormat('pt-BR', {
                  style:'currency',
                   currency:'BRl'
                  }).format(summary.withdraws)
                  }
          </strong> 
      </div>
      </Content>
      <Content className='total'>
      <div>
          <header>
            <span>Total</span>
            <img src= {totalImg} alt="total"/>
          </header>
          <strong>{
                  new Intl.NumberFormat('pt-BR', {
                  style:'currency',
                   currency:'BRl'
                  }).format(summary.total)
                }
          </strong> 
      </div>
      </Content>
    </Containter>

   
  )
}