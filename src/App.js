import React from 'react';
import { useMemoOne } from 'use-memo-one';
import Header from './components/Header';
import TicketList from './components/TicketList'
import useTickets from './hooks/useTickets'
import styles from './App.module.css';

const App = () => {
  const tickets = useTickets();

  const ticketList = useMemoOne(() => tickets ? tickets.map(ticket => ({
    id: ticket.ticketId,
    avatar: ticket.owner.avatar,
    name: `${ticket.owner.firstName} ${ticket.owner.lastName}`,
    reportedTime: ticket.reportedTime,
    status: ticket.status,
    asset: ticket.asset.name
  })) : [], tickets)

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.main}>
        <TicketList tickets={ticketList}></TicketList>
      </div>
    </div>
  );
}

export default App;
