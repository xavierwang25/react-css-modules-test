import React, { useState } from 'react';
import { useMemoOne } from 'use-memo-one';
import Header from './components/Header';
import TicketList from './components/TicketList'
import useTickets from './hooks/useTickets'
import styles from './App.module.css';
import insensitiveIncludes from './utils/insensitiveIncludes';

const App = () => {
  const tickets = useTickets();
  const [filter, setFilter] = useState('');

  const ticketList = useMemoOne(() => tickets ? tickets
    .filter(ticket => insensitiveIncludes(ticket.reportedTime, filter)
      || insensitiveIncludes(ticket.owner.firstName, filter)
      || insensitiveIncludes(ticket.owner.lastName, filter)
      || insensitiveIncludes(ticket.status, filter)
      || insensitiveIncludes(ticket.asset.name, filter))
    .map(ticket => ({
      id: ticket.ticketId,
      avatar: ticket.owner.avatar,
      name: `${ticket.owner.firstName} ${ticket.owner.lastName}`,
      reportedTime: ticket.reportedTime,
      status: ticket.status,
      asset: ticket.asset.name
    })) : [], [tickets, filter])

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <input className={styles.search} value={filter} onChange={e => setFilter(e.target.value)}></input>
          <TicketList tickets={ticketList}></TicketList>
        </div>
      </div>
    </div>
  );
}

export default App;
