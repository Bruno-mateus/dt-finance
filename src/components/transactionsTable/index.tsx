import { Containter } from "./style";
import { api } from "../../services/api";
import { useTransactions } from '../../hooks/useTransactions';


export function TransactionTable(){

const {transactions} = useTransactions()

  return(
    <Containter>
      <table>
        <thead>
        <tr>
          <th>Titulo</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        </thead>

        <tbody>
        
        {transactions.map(transaction =>(
                  <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>{
                      new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency:'BRl'
                      }).format(transaction.amount)
                    }</td>
                    <td>{transaction.category}</td>
                    <td>{
                        new Intl.DateTimeFormat('pt-BR').format(
                          new Date(transaction.createdAt)
                        )
                      }</td>
                  </tr>
        ))}

        </tbody>
      </table>
    </Containter>
  )
}