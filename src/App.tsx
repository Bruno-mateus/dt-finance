import { Header } from "./components/header";
import { GlobalStyle } from "./styles/Global";
import { Dashboard } from "./components/dashboard";
import Modal from 'react-modal'
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";
import {TransactionsProvider, useTransactions} from "./hooks/useTransactions";

export function App() { 
         // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
          Modal.setAppElement('#root');

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  return (
  <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <GlobalStyle/>
    <Dashboard/>
    <TransactionModal isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal}/>
  </TransactionsProvider>
    );
}


