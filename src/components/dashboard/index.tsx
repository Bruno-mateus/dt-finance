import { Summary } from '../summary/index'
import { TransactionTable } from '../transactionsTable'
import {Containter, Content} from './styles'

export function Dashboard(){
  return(
    <>
    <Containter>
      <Content>
        <Summary/>
      </Content>
      <TransactionTable/>   
    </Containter>

  </>
  )
}