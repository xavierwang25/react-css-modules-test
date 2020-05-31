import React from 'react';
import { useMemoOne } from 'use-memo-one';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import useTickets from './hooks/useTickets'
import styles from './App.module.css';

const App = () => {
  const tickets = useTickets();

  const sTickets = useMemoOne(() => tickets ? tickets.map(ticket => ({
    id: ticket.ticketId,
    avatar: ticket.owner.avatar,
    reportedTime: ticket.reportedTime,
    status: ticket.status,
    asset: ticket.asset.name
  })) : [], tickets)

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.body}>
        <Sidebar tickets={sTickets}></Sidebar>
      </div>
    </div>
  );
}

export default App;
