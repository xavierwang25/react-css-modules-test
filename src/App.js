import React, { useState } from 'react';
import { useMemoOne } from 'use-memo-one';
import _ from 'lodash';
import Header from './components/Header';
import TicketList from './components/TicketList'
import TicketDetail from './components/TicketDetail'
import useTickets from './hooks/useTickets'
import styles from './App.module.css';
import insensitiveIncludes from './utils/insensitiveIncludes';

const App = () => {
  const tickets = useTickets();
  const [filter, setFilter] = useState('');
  const [selectedTicketId, setSelectedTicketId] = useState(null);

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
  
  const ticketDetail = useMemoOne(() => {
    if (!selectedTicketId) {
      return null;
    }
    const ticket = _.find(tickets, {ticketId: selectedTicketId});
    return {
      ..._.pick(['number', 'lastUpdatedTime', 'specialities']),
      name: `${ticket.owner.firstName} ${ticket.owner.lastName}`,
      avatar: ticket.owner.avatar,
      assetName: ticket.asset.name,
      geoCode: ticket.asset.geoCode
    }
  }, [tickets, setSelectedTicketId]);

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.search}>
            <i className="fas fa-search"></i>
            <input className={styles.searchInput} value={filter} onChange={e => setFilter(e.target.value)}></input>
          </div>
          <TicketList tickets={ticketList} selectedId={selectedTicketId} onTicketClick={id => setSelectedTicketId(id)}></TicketList>
        </div>
        <div className={styles.content}>
          <TicketDetail ticket={ticketDetail}></TicketDetail>
        </div>
      </div>
    </div>
  );
}

export default App;
